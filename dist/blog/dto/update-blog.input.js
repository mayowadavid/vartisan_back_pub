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
exports.UpdateBlogInput = void 0;
const create_blog_input_1 = require("./create-blog.input");
const graphql_1 = require("@nestjs/graphql");
const blog_entity_1 = require("../entities/blog.entity");
let UpdateBlogInput = class UpdateBlogInput extends (0, graphql_1.PartialType)(create_blog_input_1.CreateBlogInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog title', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog date', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog content', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog content mark down', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "descriptionMarkDown", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog status', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog slug', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog file id', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog file id', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog comment id', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "commentId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog user id', nullable: true }),
    __metadata("design:type", String)
], UpdateBlogInput.prototype, "userId", void 0);
UpdateBlogInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateBlogInput);
exports.UpdateBlogInput = UpdateBlogInput;
//# sourceMappingURL=update-blog.input.js.map