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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profile_entity_1 = require("./entities/profile.entity");
const files_service_1 = require("../files/files.service");
let ProfileService = class ProfileService {
    constructor(profileRepository, fileService) {
        this.profileRepository = profileRepository;
        this.fileService = fileService;
    }
    create(createProfileInput) {
        const profile = this.profileRepository.create(createProfileInput);
        return this.profileRepository.save(profile);
    }
    findUserProfile(user) {
        return this.profileRepository.findOne({
            relations: ['file', 'user'],
            where: {
                user,
            },
        });
    }
    findAll() {
        return this.profileRepository.find({
            relations: ['file', 'user'],
        });
    }
    async upload(files, request, user, response) {
        let Images;
        for (let x = 0; x < files.length; x++) {
            const imageBuffer = files[x].buffer;
            const filename = files[x].originalname;
            let fileType;
            const imageType = [
                'image/jpeg',
                'image/png',
                'image/tiff',
                'image/svg+xml',
            ];
            const audioType = ['audio/mpeg'];
            const videoType = ['video/mpeg', 'video/mp4'];
            const documentType = [
                'application/msword',
                'application/gzip',
                'application/vnd.oasis.opendocument.text',
                'application/pdf',
                'application/vnd.ms-powerpoint',
                'application/vnd.rar',
                'video/mp2t',
                'text/plain',
                'application/zip',
                '	application/x-7z-compressed',
            ];
            const gifType = ['image/gif'];
            if (imageType.includes(files[x].mimetype)) {
                fileType = 'image';
            }
            else if (audioType.includes(files[x].mimetype)) {
                fileType = 'audio';
            }
            else if (videoType.includes(files[x].mimetype)) {
                fileType = 'video';
            }
            else if (documentType.includes(files[x].mimetype)) {
                fileType = 'document';
            }
            else if (gifType.includes(files[x].mimetype)) {
                fileType = 'gif';
            }
            else {
                return response.status(200).json('invalid file type');
            }
            await this.fileService
                .uploadPublicFile(imageBuffer, filename, fileType)
                .then((result) => (Images = result));
        }
        const { profileId } = request.body;
        const profile = await this.profileRepository.findOne(profileId);
        profile.file = Images;
        profile.user = user;
        const data = await this.profileRepository.save(profile);
        return response.status(200).json(data);
    }
    findProfileName(userName) {
        return this.profileRepository.findOne({
            relations: ['user'],
            where: {
                userName,
            },
        });
    }
    findOne(id) {
        return this.profileRepository.findOne(id, {
            relations: ['file', 'user'],
        });
    }
    async update(user, updateProfileInput) {
        const profile = await this.profileRepository.findOne(updateProfileInput.id);
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateProfileInput);
        const result = Object.assign(Object.assign({}, profile), value);
        result.user = user;
        return this.profileRepository.save(result);
    }
    async remove(id) {
        const deleteProfile = await this.profileRepository.findOne(id, {
            relations: ['file', 'user'],
        });
        await this.profileRepository.remove(deleteProfile);
        return deleteProfile;
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map