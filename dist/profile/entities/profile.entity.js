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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.UserLanguage = exports.UserRole = void 0;
const graphql_1 = require("@nestjs/graphql");
const file_entity_1 = require("../../files/entities/file.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["VARTISAN"] = "vartisan";
    UserRole["CLIENT"] = "client";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var UserLanguage;
(function (UserLanguage) {
    UserLanguage["ENGLISH"] = "english";
    UserLanguage["FRENCH"] = "french";
    UserLanguage["SPANISH"] = "spanish";
})(UserLanguage = exports.UserLanguage || (exports.UserLanguage = {}));
let Profile = class Profile {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Profile.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'first name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'last name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All active orders', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "activeOrders", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All completed orders', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Profile.prototype, "completedOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All canceled orders', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Profile.prototype, "canceledOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User specialization', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "specialization", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'about User', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'description mark down', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "descriptionMarkDown", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.profileImage),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => file_entity_1.File, { description: 'profile images', nullable: true }),
    __metadata("design:type", file_entity_1.File)
], Profile.prototype, "file", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'file id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User achievement', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "achievement", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User rank', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "rank", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User role', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: 'enum', enum: UserRole, default: 'client' }),
    __metadata("design:type", String)
], Profile.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User language', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: UserLanguage,
        default: 'english',
    }),
    __metadata("design:type", String)
], Profile.prototype, "language", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User status', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Profile.prototype, "onlineStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user reference', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "reference", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user registration date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.profile),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'user profile' }),
    __metadata("design:type", user_entity_1.User)
], Profile.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Profile.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Profile.prototype, "updatedDate", void 0);
Profile = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=profile.entity.js.map