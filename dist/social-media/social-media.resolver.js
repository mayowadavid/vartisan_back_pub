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
exports.SocialMediaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const social_media_service_1 = require("./social-media.service");
const social_media_entity_1 = require("./entities/social-media.entity");
const create_social_media_input_1 = require("./dto/create-social-media.input");
const update_social_media_input_1 = require("./dto/update-social-media.input");
let SocialMediaResolver = class SocialMediaResolver {
    constructor(socialMediaService) {
        this.socialMediaService = socialMediaService;
    }
    createSocialMedia(createSocialMediaInput) {
        return this.socialMediaService.create(createSocialMediaInput);
    }
    findAll() {
        return this.socialMediaService.findAll();
    }
    findOne(id) {
        return this.socialMediaService.findOne(id);
    }
    updateSocialMedia(updateSocialMediaInput) {
        return this.socialMediaService.update(updateSocialMediaInput.id, updateSocialMediaInput);
    }
    removeSocialMedia(id) {
        return this.socialMediaService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => social_media_entity_1.SocialMedia),
    __param(0, (0, graphql_1.Args)('createSocialMediaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_social_media_input_1.CreateSocialMediaInput]),
    __metadata("design:returntype", void 0)
], SocialMediaResolver.prototype, "createSocialMedia", null);
__decorate([
    (0, graphql_1.Query)(() => [social_media_entity_1.SocialMedia], { name: 'socialMedia' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SocialMediaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => social_media_entity_1.SocialMedia, { name: 'socialMedia' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialMediaResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => social_media_entity_1.SocialMedia),
    __param(0, (0, graphql_1.Args)('updateSocialMediaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_social_media_input_1.UpdateSocialMediaInput]),
    __metadata("design:returntype", void 0)
], SocialMediaResolver.prototype, "updateSocialMedia", null);
__decorate([
    (0, graphql_1.Mutation)(() => social_media_entity_1.SocialMedia),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialMediaResolver.prototype, "removeSocialMedia", null);
SocialMediaResolver = __decorate([
    (0, graphql_1.Resolver)(() => social_media_entity_1.SocialMedia),
    __metadata("design:paramtypes", [social_media_service_1.SocialMediaService])
], SocialMediaResolver);
exports.SocialMediaResolver = SocialMediaResolver;
//# sourceMappingURL=social-media.resolver.js.map