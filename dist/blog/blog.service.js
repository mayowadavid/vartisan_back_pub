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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const blog_entity_1 = require("./entities/blog.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const files_service_1 = require("../files/files.service");
let BlogService = class BlogService {
    constructor(blogRepository, fileService) {
        this.blogRepository = blogRepository;
        this.fileService = fileService;
    }
    create(user, createBlogInput) {
        const blog = this.blogRepository.create(createBlogInput);
        blog.user = user;
        return this.blogRepository.save(blog);
    }
    findAll() {
        return this.blogRepository.find({
            relations: ['file', 'çomments'],
        });
    }
    async findBlogByUser(user) {
        const result = await this.blogRepository.find({
            relations: [
                'file',
                'comments',
                'category',
                'user',
                'user.profile',
                'user.profile.file',
            ],
            where: {
                user,
            },
        });
        return result;
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
        const { blogId } = request.body;
        const blog = await this.blogRepository.findOne(blogId);
        blog.file = Images;
        blog.user = user;
        const data = await this.blogRepository.save(blog);
        return response.status(200).json(data);
    }
    findOne(id) {
        return this.blogRepository.findOne(id, { relations: ['file', 'çomments'] });
    }
    async update(id, updateBlogInput) {
        const blog = await this.blogRepository.create(updateBlogInput);
        blog.id = id;
        return this.blogRepository.save(blog);
    }
    async remove(id) {
        const deleteBlog = await this.blogRepository.findOne(id);
        const copy = Object.assign({}, deleteBlog);
        deleteBlog.category = null;
        deleteBlog.user = null;
        deleteBlog.file = null;
        deleteBlog.comments = null;
        const result = await this.blogRepository.save(deleteBlog);
        await this.blogRepository.remove(deleteBlog);
        return copy;
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.Blog)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map