import { Profile } from 'src/profile/entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Earning } from 'src/earnings/entities/earning.entity';
export declare class UsersService {
    private userRepository;
    private profileRepository;
    private earningRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>, earningRepository: Repository<Earning>, jwtService: JwtService);
    create(userInput: CreateUserInput): Promise<any>;
    validateUser({ userId }: {
        userId: any;
    }): Promise<any>;
    private getPasswordHash;
    verifyToken(token: string): Promise<any>;
    getJwtToken(dataToken: any): Promise<string>;
    getRefreshToken(userId: string, role: string): Promise<any>;
    loginUser(userInput: CreateUserInput): Promise<any>;
    findUserByName(userName: string): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserInput: UpdateUserInput): Promise<User>;
    remove(id: string): Promise<User>;
}
