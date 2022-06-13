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
exports.ProfileResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_service_1 = require("./profile.service");
const profile_entity_1 = require("./entities/profile.entity");
const create_profile_input_1 = require("./dto/create-profile.input");
const update_profile_input_1 = require("./dto/update-profile.input");
const gql_users_guard_1 = require("../users/gql-users.guard");
const common_1 = require("@nestjs/common");
const current_user_1 = require("../users/current-user");
let ProfileResolver = class ProfileResolver {
    constructor(profileService) {
        this.profileService = profileService;
    }
    createProfile(createProfileInput) {
        return this.profileService.create(createProfileInput);
    }
    findAll() {
        return this.profileService.findAll();
    }
    findOne(id) {
        return this.profileService.findOne(id);
    }
    findProfileName(userName) {
        return this.profileService.findProfileName(userName);
    }
    findUserProfile(user) {
        return this.profileService.findUserProfile(user);
    }
    updateProfile(user, updateProfileInput) {
        return this.profileService.update(user, updateProfileInput);
    }
    removeProfile(id) {
        return this.profileService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    __param(0, (0, graphql_1.Args)('createProfileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_input_1.CreateProfileInput]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "createProfile", null);
__decorate([
    (0, graphql_1.Query)(() => [profile_entity_1.Profile], { name: 'findAllProfile' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => profile_entity_1.Profile, { name: 'profile' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => profile_entity_1.Profile, { name: 'findProfileName' }),
    __param(0, (0, graphql_1.Args)('userName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "findProfileName", null);
__decorate([
    (0, graphql_1.Query)(() => profile_entity_1.Profile, { name: 'findUserProfile' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "findUserProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('updateProfileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_profile_input_1.UpdateProfileInput]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "updateProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileResolver.prototype, "removeProfile", null);
ProfileResolver = __decorate([
    (0, graphql_1.Resolver)(() => profile_entity_1.Profile),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileResolver);
exports.ProfileResolver = ProfileResolver;
//# sourceMappingURL=profile.resolver.js.map