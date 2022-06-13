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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
const files_service_1 = require("../files/files.service");
let CategoriesService = class CategoriesService {
    constructor(categoryRepository, fileService) {
        this.categoryRepository = categoryRepository;
        this.fileService = fileService;
    }
    async create(CategoryInput) {
        const categ = await this.categoryRepository.create(CategoryInput);
        return this.categoryRepository.save(categ);
    }
    findAll() {
        return this.categoryRepository.find({
            relations: [
                'file',
                'subCategory',
                'subCategory.gig',
                'gig',
                'gig.gigGallery',
                'gig.gigGallery.file',
                'gig.user',
                'gig.user.profile',
                'gig.user.profile.file',
            ],
        });
    }
    findOne(id) {
        return this.categoryRepository.findOne(id, {
            relations: ['file', 'subCategory'],
        });
    }
    async update(id, updateCategoryInput) {
        const category = await this.categoryRepository.findOne({
            where: {
                id,
            },
        });
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateCategoryInput);
        const result = Object.assign(Object.assign({}, category), value);
        return this.categoryRepository.save(result);
    }
    async upload(files, request, response) {
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
        const { name, description, status, displayBanner } = request.body;
        const categoryContent = new category_entity_1.Category();
        categoryContent.name = name;
        categoryContent.description = description;
        categoryContent.status = status;
        categoryContent.file = imageValue;
        categoryContent.displayBanner = displayBanner;
        const data = await this.categoryRepository.save(categoryContent);
        return response.status(200).json(data);
    }
    async remove(id) {
        const deleteCategory = await this.categoryRepository.findOne(id);
        return deleteCategory;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map