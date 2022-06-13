import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileInput } from 'src/profile/dto/create-profile.input';
import { Profile } from 'src/profile/entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';
import { Earning } from 'src/earnings/entities/earning.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Earning) private earningRepository: Repository<Earning>,
    private jwtService: JwtService,
  ) {}

  async create(userInput: CreateUserInput): Promise<any> {
    const user = await this.userRepository.findOne({ email: userInput.email });
    const uniqueName = await this.userRepository.findOne({
      userName: userInput.userName,
    });
    if (user !== undefined && user.email) {
      throw new BadRequestException('user already exist');
    } else if (uniqueName !== undefined && uniqueName.userName) {
      throw new BadRequestException('username already exist');
    } else {
      userInput.password = await this.getPasswordHash(userInput.password);
      const vartisan = await this.userRepository.create(userInput);
      const createProfile = await this.profileRepository.create();
      const createWallet = await this.earningRepository.create();
      const earning = await this.earningRepository.save(createWallet);
      const profile = await this.profileRepository.save(createProfile);

      const signUpToken = await this.getJwtToken({
        role: profile.role,
      });

      vartisan.profile = profile;
      vartisan.earning = earning;
      vartisan.refreshToken = signUpToken;
      return this.userRepository.save(vartisan);
    }
  }

  async validateUser({ userId }): Promise<any> {
    const id = userId;
    const user = await this.findOne(id);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private async getPasswordHash(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  async verifyToken(token: string): Promise<any> {
    return await this.jwtService.decode(token);
  }

  public async getJwtToken(dataToken): Promise<string> {
    const payload = {
      ...dataToken,
    };
    return this.jwtService.signAsync(payload);
  }

  public async getRefreshToken(userId: string, role: string): Promise<any> {
    const payload = {
      userId,
      role,
    };
    const token = await this.jwtService.signAsync(payload);
    const userDataToUpdate = {
      refreshToken: token,
      refreshTokenExp: moment().day(1).format('YYYY/MM/DD'),
    };
    await this.userRepository.update(userId, userDataToUpdate);
    return userDataToUpdate;
  }

  async loginUser(userInput: CreateUserInput): Promise<any> {
    const user = await this.userRepository.findOne({
      relations: ['profile', 'gig', 'earning'],
      where: {
        email: userInput.email,
      },
    });

    const uniqueName = await this.userRepository.findOne({
      userName: userInput.userName,
    });

    if (user == null) {
      throw new BadRequestException('user not found');
    } else if (user !== undefined && user.email !== userInput.email) {
      throw new BadRequestException('invalid email');
    } else if (uniqueName !== undefined && userInput.userName !== undefined) {
      throw new BadRequestException('invalid user name');
    }
    const isValidPassword = await bcrypt.compare(
      userInput.password,
      user.password,
    );
    if (!isValidPassword) {
      throw new BadRequestException('invalid password');
    }
    const userId = user.id;
    const role = user.profile.role;
    const { refreshToken, refreshTokenExp } = await this.getRefreshToken(
      userId,
      role,
    );

    userInput = { ...user, refreshTokenExp, refreshToken };

    return userInput;
  }

  findUserByName(userName: string): Promise<User> {
    return this.userRepository.findOne({
      relations: [
        'profile',
        'gig',
        'client',
        'seller',
        'notification',
        'earning',
      ],
      where: {
        userName,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: [
        'profile',
        'gig',
        'seller',
        'client',
        'notification',
        'earning',
      ],
    });
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const userToUpdate = await this.userRepository.findOne(id);
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(updateUserInput);
    value.password = await this.getPasswordHash(value.password);
    const result = { ...userToUpdate, ...value };
    return this.userRepository.save(result);
  }

  async remove(id: string): Promise<User> {
    const removeUser: User = await this.userRepository.findOne(id);
    await this.userRepository.remove(removeUser);
    return removeUser;
  }
}
