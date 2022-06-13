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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = exports.BlogStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_entity_1 = require("../../categories/entities/category.entity");
const comment_entity_1 = require("../../comments/entities/comment.entity");
const file_entity_1 = require("../../files/entities/file.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
var BlogStatus;
(function (BlogStatus) {
    BlogStatus["DRAFT"] = "draft";
    BlogStatus["PAUSED"] = "paused";
    BlogStatus["ACTIVE"] = "active";
})(BlogStatus = exports.BlogStatus || (exports.BlogStatus = {}));
let Blog = class Blog {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Blog.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog title', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog content', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog content mark down', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "descriptionMarkDown", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog status', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: BlogStatus,
        default: 'draft',
    }),
    __metadata("design:type", String)
], Blog.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog slug', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog category id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog file id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog comment id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "commentId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog user id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.blog, {
        cascade: false,
    }),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'blog category', nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Blog.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => category_entity_1.Category, (category) => category.blog, {
        cascade: false,
    }),
    (0, graphql_1.Field)(() => [category_entity_1.Category], { description: 'blog category', nullable: true }),
    __metadata("design:type", Array)
], Blog.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.category, {
        cascade: false,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => file_entity_1.File, { description: 'blog image', nullable: true }),
    __metadata("design:type", file_entity_1.File)
], Blog.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.blog, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => [comment_entity_1.Comment], { description: 'blog comment', nullable: true }),
    __metadata("design:type", Array)
], Blog.prototype, "comments", void 0);
Blog = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Blog);
exports.Blog = Blog;
//# sourceMappingURL=blog.entity.js.map