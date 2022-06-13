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
exports.CreateBlogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const blog_entity_1 = require("../entities/blog.entity");
let CreateBlogInput = class CreateBlogInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'blog title', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog date', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog content', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog content mark down', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "descriptionMarkDown", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog status', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog slug', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog category id', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog file id', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog comment id', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "commentId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog user id', nullable: true }),
    __metadata("design:type", String)
], CreateBlogInput.prototype, "userId", void 0);
CreateBlogInput = __decorate([
    (0, graphql_1.InputType)()
], CreateBlogInput);
exports.CreateBlogInput = CreateBlogInput;
//# sourceMappingURL=create-blog.input.js.map