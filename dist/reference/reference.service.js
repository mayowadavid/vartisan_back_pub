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
exports.ReferenceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reference_entity_1 = require("./entities/reference.entity");
const files_service_1 = require("../files/files.service");
let ReferenceService = class ReferenceService {
    constructor(referenceRepository, fileService) {
        this.referenceRepository = referenceRepository;
        this.fileService = fileService;
    }
    create(createReferenceInput) {
        const reference = this.referenceRepository.create(createReferenceInput);
        return this.referenceRepository.save(reference);
    }
    findAll() {
        return this.referenceRepository.find({
            relations: ['file', 'gigReference', 'user'],
        });
    }
    findOne(id) {
        return this.referenceRepository.findOne(id, {
            relations: ['file', 'gigReference', 'user'],
        });
    }
    findReferenceByUser(user) {
        return this.referenceRepository.find({
            relations: ['file', 'gigReference', 'user'],
            where: { userId: user.id },
        });
    }
    update(id, updateReferenceInput) {
        const reference = this.referenceRepository.create(updateReferenceInput);
        reference.id = id;
        return this.referenceRepository.save(reference);
    }
    async upload(files, request, user, response) {
        let imageValue;
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
                .then((result) => (imageValue = result));
        }
        const { name, description, selected } = request.body;
        const referenceContent = new reference_entity_1.Reference();
        referenceContent.name = name;
        referenceContent.user = user;
        referenceContent.description = description;
        referenceContent.selected = selected;
        referenceContent.file = imageValue;
        const data = await this.referenceRepository.save(referenceContent);
        return response.status(200).json(data);
    }
    async remove(id) {
        const deleteReference = await this.referenceRepository.findOne(id, {
            relations: ['file', 'gigReference'],
        });
        await this.referenceRepository.remove(deleteReference);
        return deleteReference;
    }
};
ReferenceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reference_entity_1.Reference)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], ReferenceService);
exports.ReferenceService = ReferenceService;
//# sourceMappingURL=reference.service.js.map