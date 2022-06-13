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
var Category_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.categoryStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const blog_entity_1 = require("../../blog/entities/blog.entity");
const file_entity_1 = require("../../files/entities/file.entity");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const sub_category_entity_1 = require("../../sub-category/entities/sub-category.entity");
const typeorm_1 = require("typeorm");
var categoryStatus;
(function (categoryStatus) {
    categoryStatus["DRAFT"] = "draft";
    categoryStatus["PAUSED"] = "paused";
    categoryStatus["ACTIVE"] = "active";
})(categoryStatus = exports.categoryStatus || (exports.categoryStatus = {}));
let Category = Category_1 = class Category {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Category.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category description', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category status', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: categoryStatus,
        default: 'draft',
    }),
    __metadata("design:type", String)
], Category.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display banner', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Category.prototype, "displayBanner", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'sub category id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "subCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "blogId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => blog_entity_1.Blog, (blog) => blog.category),
    (0, graphql_1.Field)(() => blog_entity_1.Blog, { description: 'blog category', nullable: true }),
    __metadata("design:type", blog_entity_1.Blog)
], Category.prototype, "blog", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.category),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => file_entity_1.File, { description: 'category image', nullable: true }),
    __metadata("design:type", file_entity_1.File)
], Category.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_entity_1.Gig, (gig) => gig.category),
    (0, graphql_1.Field)(() => [gig_entity_1.Gig], { description: 'parent category', nullable: true }),
    __metadata("design:type", Array)
], Category.prototype, "gig", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sub_category_entity_1.SubCategory, (subCategory) => subCategory.category),
    (0, graphql_1.Field)(() => [Category_1], { description: 'parent category', nullable: true }),
    __metadata("design:type", Array)
], Category.prototype, "subCategory", void 0);
Category = Category_1 = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map