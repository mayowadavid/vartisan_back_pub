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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_entity_1 = require("./entities/file.entity");
const aws_sdk_1 = require("aws-sdk");
const uuid_1 = require("uuid");
const config_1 = require("@nestjs/config");
let FilesService = class FilesService {
    constructor(fileRepository, configService) {
        this.fileRepository = fileRepository;
        this.configService = configService;
    }
    async uploadPublicFile(dataBuffer, filename, fileType) {
        const s3 = new aws_sdk_1.S3({
            region: 'us-east-1',
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_KEY,
            correctClockSkew: true,
        });
        const bufferRep = dataBuffer;
        const uploadResult = await s3
            .upload({
            Bucket: 'vartisan-bucket',
            Body: bufferRep,
            Key: `${(0, uuid_1.v4)()}-${filename}`,
        })
            .promise();
        const name = uploadResult.Key;
        const location = uploadResult.Location;
        const data = {
            name,
            [fileType]: location,
        };
        const newFile = this.fileRepository.create(data);
        await this.fileRepository.save(newFile);
        return newFile;
    }
    create(data) {
        const file = this.fileRepository.create(data);
        return this.fileRepository.save(file);
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
            await this.uploadPublicFile(imageBuffer, filename, fileType).then((result) => Images.push(result));
        }
        return response.status(200).json(Images);
    }
    findAll() {
        return this.fileRepository.find({
            relations: ['message'],
        });
    }
    findOne(id) {
        return this.fileRepository.findOne(id, {
            relations: ['banner'],
        });
    }
    update(id, updateFileInput) {
        const file = this.fileRepository.create(updateFileInput);
        file.id = id;
        return this.fileRepository.save(file);
    }
    async remove(id) {
        const deleteFile = await this.fileRepository.findOne(id, {
            relations: [
                'profileImage',
                'banner',
                'homeFaq',
                'videoGallery',
                'imageGallery',
                'galleryFile',
                'clientRerence',
                'message',
                'blog',
            ],
        });
        await this.fileRepository.remove(deleteFile);
        return deleteFile;
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.File)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map