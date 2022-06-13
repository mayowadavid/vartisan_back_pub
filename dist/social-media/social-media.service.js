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
exports.SocialMediaService = void 0;
const common_1 = require("@nestjs/common");
const social_media_entity_1 = require("./entities/social-media.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SocialMediaService = class SocialMediaService {
    constructor(socialMediaRepository) {
        this.socialMediaRepository = socialMediaRepository;
    }
    create(createSocialMediaInput) {
        const socialMedia = this.socialMediaRepository.create(createSocialMediaInput);
        return this.socialMediaRepository.save(socialMedia);
    }
    findAll() {
        return this.socialMediaRepository.find();
    }
    findOne(id) {
        return this.socialMediaRepository.findOne(id);
    }
    update(id, updateSocialMediaInput) {
        const socialMedia = this.socialMediaRepository.create(updateSocialMediaInput);
        socialMedia.id = id;
        return this.socialMediaRepository.save(socialMedia);
    }
    async remove(id) {
        const deleteSocialMedia = await this.socialMediaRepository.findOne(id);
        await this.socialMediaRepository.remove(deleteSocialMedia);
        return deleteSocialMedia;
    }
};
SocialMediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(social_media_entity_1.SocialMedia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SocialMediaService);
exports.SocialMediaService = SocialMediaService;
//# sourceMappingURL=social-media.service.js.map