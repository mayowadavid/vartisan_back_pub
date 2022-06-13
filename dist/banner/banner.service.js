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
exports.BannerService = void 0;
const common_1 = require("@nestjs/common");
const banner_entity_1 = require("./entities/banner.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const files_service_1 = require("../files/files.service");
let BannerService = class BannerService {
    constructor(bannerRepository, fileService) {
        this.bannerRepository = bannerRepository;
        this.fileService = fileService;
    }
    create(createBannerInput) {
        const banner = this.bannerRepository.create(createBannerInput);
        return this.bannerRepository.save(banner);
    }
    findAll() {
        return this.bannerRepository.find({
            relations: ['file'],
        });
    }
    findOne(id) {
        return this.bannerRepository.findOne(id, {
            relations: ['file'],
        });
    }
    update(id, updateBannerInput) {
        const banner = this.bannerRepository.create(updateBannerInput);
        banner.id = id;
        return this.bannerRepository.save(banner);
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
        const { bannerTitle, bannerDescription, bannerFirstActionTitle, bannerSecondACtionTitle, bannerMiddleContent, } = request.body;
        const homeBanner = new banner_entity_1.Banner();
        homeBanner.bannerTitle = bannerTitle;
        homeBanner.bannerDescription = bannerDescription;
        homeBanner.bannerFirstActionTitle = bannerFirstActionTitle;
        homeBanner.bannerSecondACtionTitle = bannerSecondACtionTitle;
        homeBanner.bannerMiddleContent = bannerMiddleContent;
        homeBanner.file = Images;
        const data = await this.bannerRepository.save(homeBanner);
        return response.status(200).json(data);
    }
    async remove(id) {
        const deleteBanner = await this.bannerRepository.findOne(id, {
            relations: ['file'],
        });
        await this.bannerRepository.remove(deleteBanner);
        return deleteBanner;
    }
};
BannerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(banner_entity_1.Banner)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], BannerService);
exports.BannerService = BannerService;
//# sourceMappingURL=banner.service.js.map