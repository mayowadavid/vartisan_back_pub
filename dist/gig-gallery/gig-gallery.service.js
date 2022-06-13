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
exports.GigGalleryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gig_gallery_entity_1 = require("./entities/gig-gallery.entity");
const files_service_1 = require("../files/files.service");
let GigGalleryService = class GigGalleryService {
    constructor(gigGalleryRepository, fileService) {
        this.gigGalleryRepository = gigGalleryRepository;
        this.fileService = fileService;
    }
    create(createGigGalleryInput) {
        const gigGallery = this.gigGalleryRepository.create(createGigGalleryInput);
        return this.gigGalleryRepository.save(gigGallery);
    }
    findAll() {
        return this.gigGalleryRepository.find({ relations: ['file'] });
    }
    findOne(id) {
        return this.gigGalleryRepository.findOne(id, { relations: ['file'] });
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
        const { name, selected, gigId, id } = request.body;
        const GigGalleryContent = new gig_gallery_entity_1.GigGallery();
        GigGalleryContent.id = id;
        GigGalleryContent.name = name;
        GigGalleryContent.file = Images;
        GigGalleryContent.gigId = gigId;
        GigGalleryContent.selected = selected;
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(GigGalleryContent);
        const data = await this.gigGalleryRepository.save(value);
        return response.status(200).json(data);
    }
    async update(id, updateGigGalleryInput) {
        const allGigGallery = await this.gigGalleryRepository.findOne(id);
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateGigGalleryInput);
        const result = Object.assign(Object.assign({}, allGigGallery), value);
        return this.gigGalleryRepository.save(result);
    }
    async remove(id) {
        const deleteGigGallery = await this.gigGalleryRepository.findOne(id);
        await this.gigGalleryRepository.remove(deleteGigGallery);
        return deleteGigGallery;
    }
};
GigGalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gig_gallery_entity_1.GigGallery)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], GigGalleryService);
exports.GigGalleryService = GigGalleryService;
//# sourceMappingURL=gig-gallery.service.js.map