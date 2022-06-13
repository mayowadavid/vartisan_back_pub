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
exports.FaqImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const faq_image_entity_1 = require("./entities/faq-image.entity");
const files_service_1 = require("../files/files.service");
let FaqImageService = class FaqImageService {
    constructor(faqImageRepository, fileService) {
        this.faqImageRepository = faqImageRepository;
        this.fileService = fileService;
    }
    async create(createFaqImageInput) {
        const faqImage = await this.faqImageRepository.create(createFaqImageInput);
        return this.faqImageRepository.save(faqImage);
    }
    findAll() {
        return this.faqImageRepository.find();
    }
    findOne(id) {
        return this.faqImageRepository.findOne(id);
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
        const FaqImageContent = new faq_image_entity_1.FaqImage();
        FaqImageContent.file = Images;
        const data = await this.faqImageRepository.save(FaqImageContent);
        return response.status(200).json(data);
    }
    update(id, updateFaqImageInput) {
        const faqImage = this.faqImageRepository.create(updateFaqImageInput);
        faqImage.id = id;
        return this.faqImageRepository.save(faqImage);
    }
    async remove(id) {
        const deleteFaqImage = await this.faqImageRepository.findOne(id, {
            relations: ['bannerImage', 'displayBanner', 'home'],
        });
        await this.faqImageRepository.remove(deleteFaqImage);
        return deleteFaqImage;
    }
};
FaqImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(faq_image_entity_1.FaqImage)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], FaqImageService);
exports.FaqImageService = FaqImageService;
//# sourceMappingURL=faq-image.service.js.map