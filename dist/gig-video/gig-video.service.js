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
exports.GigVideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gig_video_entity_1 = require("./entities/gig-video.entity");
const files_service_1 = require("../files/files.service");
let GigVideoService = class GigVideoService {
    constructor(gigVideoRepository, fileService) {
        this.gigVideoRepository = gigVideoRepository;
        this.fileService = fileService;
    }
    create(createGigVideoInput) {
        const gigVideo = this.gigVideoRepository.create(createGigVideoInput);
        return this.gigVideoRepository.save(gigVideo);
    }
    findAll() {
        return this.gigVideoRepository.find({ relations: ['file'] });
    }
    findOne(id) {
        return this.gigVideoRepository.findOne(id, { relations: ['file'] });
    }
    async upload(files, request, response) {
        const Images = [];
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
                .then((result) => Images.push(result));
        }
        const { name, selected, gigId } = request.body;
        const GigVideoContent = new gig_video_entity_1.GigVideo();
        GigVideoContent.name = name;
        GigVideoContent.file = Images;
        GigVideoContent.selected = selected;
        GigVideoContent.gigId = gigId;
        const data = await this.gigVideoRepository.save(GigVideoContent);
        return response.status(200).json(data);
    }
    async update(id, updateGigVideoInput) {
        const allGigVideo = await this.gigVideoRepository.findOne(id);
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateGigVideoInput);
        const result = Object.assign(Object.assign({}, allGigVideo), value);
        return this.gigVideoRepository.save(result);
    }
    async remove(id) {
        const deleteGigVideo = await this.gigVideoRepository.findOne(id);
        await this.gigVideoRepository.remove(deleteGigVideo);
        return deleteGigVideo;
    }
};
GigVideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gig_video_entity_1.GigVideo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], GigVideoService);
exports.GigVideoService = GigVideoService;
//# sourceMappingURL=gig-video.service.js.map