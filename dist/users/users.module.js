"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_resolver_1 = require("./users.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const profile_service_1 = require("../profile/profile.service");
const profile_entity_1 = require("../profile/entities/profile.entity");
const profile_module_1 = require("../profile/profile.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
const file_entity_1 = require("../files/entities/file.entity");
const files_service_1 = require("../files/files.service");
const earnings_module_1 = require("../earnings/earnings.module");
const earnings_service_1 = require("../earnings/earnings.service");
const earning_entity_1 = require("../earnings/entities/earning.entity");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, profile_entity_1.Profile, file_entity_1.File, earning_entity_1.Earning]),
            profile_module_1.ProfileModule,
            earnings_module_1.EarningsModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'secretKey',
                signOptions: { expiresIn: '10d' },
            }),
        ],
        providers: [
            users_resolver_1.UsersResolver,
            users_service_1.UsersService,
            profile_service_1.ProfileService,
            earnings_service_1.EarningsService,
            jwt_strategy_1.JwtStrategy,
            files_service_1.FilesService,
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map