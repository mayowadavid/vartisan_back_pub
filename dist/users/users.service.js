"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profile_entity_1 = require("../profile/entities/profile.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const moment = require("moment");
const bcrypt = require("bcrypt");
const earning_entity_1 = require("../earnings/entities/earning.entity");
let UsersService = class UsersService {
    constructor(userRepository, profileRepository, earningRepository, jwtService) {
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
        this.earningRepository = earningRepository;
        this.jwtService = jwtService;
    }
    async create(userInput) {
        const user = await this.userRepository.findOne({ email: userInput.email });
        const uniqueName = await this.userRepository.findOne({
            userName: userInput.userName,
        });
        if (user !== undefined && user.email) {
            throw new common_1.BadRequestException('user already exist');
        }
        else if (uniqueName !== undefined && uniqueName.userName) {
            throw new common_1.BadRequestException('username already exist');
        }
        else {
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
    async validateUser({ userId }) {
        const id = userId;
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
    async getPasswordHash(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    async verifyToken(token) {
        return await this.jwtService.decode(token);
    }
    async getJwtToken(dataToken) {
        const payload = Object.assign({}, dataToken);
        return this.jwtService.signAsync(payload);
    }
    async getRefreshToken(userId, role) {
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
    async loginUser(userInput) {
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
            throw new common_1.BadRequestException('user not found');
        }
        else if (user !== undefined && user.email !== userInput.email) {
            throw new common_1.BadRequestException('invalid email');
        }
        else if (uniqueName !== undefined && userInput.userName !== undefined) {
            throw new common_1.BadRequestException('invalid user name');
        }
        const isValidPassword = await bcrypt.compare(userInput.password, user.password);
        if (!isValidPassword) {
            throw new common_1.BadRequestException('invalid password');
        }
        const userId = user.id;
        const role = user.profile.role;
        const { refreshToken, refreshTokenExp } = await this.getRefreshToken(userId, role);
        userInput = Object.assign(Object.assign({}, user), { refreshTokenExp, refreshToken });
        return userInput;
    }
    findUserByName(userName) {
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
    async findAll() {
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
    async findOne(id) {
        return this.userRepository.findOne(id);
    }
    async update(id, updateUserInput) {
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
        const result = Object.assign(Object.assign({}, userToUpdate), value);
        return this.userRepository.save(result);
    }
    async remove(id) {
        const removeUser = await this.userRepository.findOne(id);
        await this.userRepository.remove(removeUser);
        return removeUser;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __param(2, (0, typeorm_1.InjectRepository)(earning_entity_1.Earning)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map