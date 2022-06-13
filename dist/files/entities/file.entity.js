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
exports.File = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_entity_1 = require("../../profile/entities/profile.entity");
const reference_entity_1 = require("../../reference/entities/reference.entity");
const message_entity_1 = require("../../messages/entities/message.entity");
const typeorm_1 = require("typeorm");
const blog_entity_1 = require("../../blog/entities/blog.entity");
const banner_entity_1 = require("../../banner/entities/banner.entity");
const faq_image_entity_1 = require("../../faq-image/entities/faq-image.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const gig_video_entity_1 = require("../../gig-video/entities/gig-video.entity");
const gig_gallery_entity_1 = require("../../gig-gallery/entities/gig-gallery.entity");
const order_requirement_entity_1 = require("../../order-requirement/entities/order-requirement.entity");
let File = class File {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], File.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'image', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], File.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'url', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], File.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'audio', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], File.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'video', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], File.prototype, "video", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'GIF', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], File.prototype, "gif", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'documents', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], File.prototype, "document", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'messagId', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], File.prototype, "messageId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_requirement_entity_1.OrderRequirement, (orderRequirement) => orderRequirement.descriptionFile),
    (0, graphql_1.Field)(() => order_requirement_entity_1.OrderRequirement, {
        description: 'order description file',
        nullable: true,
    }),
    __metadata("design:type", order_requirement_entity_1.OrderRequirement)
], File.prototype, "descriptionFile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_requirement_entity_1.OrderRequirement, (orderRequirement) => orderRequirement.referenceFile),
    (0, graphql_1.Field)(() => order_requirement_entity_1.OrderRequirement, {
        description: 'order reference file',
        nullable: true,
    }),
    __metadata("design:type", order_requirement_entity_1.OrderRequirement)
], File.prototype, "referenceFile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_requirement_entity_1.OrderRequirement, (orderRequirement) => orderRequirement.colorFile),
    (0, graphql_1.Field)(() => order_requirement_entity_1.OrderRequirement, {
        description: 'order color file',
        nullable: true,
    }),
    __metadata("design:type", order_requirement_entity_1.OrderRequirement)
], File.prototype, "colorFile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.Profile, (profileImage) => profileImage.file),
    (0, graphql_1.Field)(() => profile_entity_1.Profile, { description: 'profile image', nullable: true }),
    __metadata("design:type", profile_entity_1.Profile)
], File.prototype, "profileImage", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'banner id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], File.prototype, "bannerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => faq_image_entity_1.FaqImage, (faqImage) => faqImage.file),
    (0, graphql_1.Field)(() => faq_image_entity_1.FaqImage, { description: 'home faq', nullable: true }),
    __metadata("design:type", faq_image_entity_1.FaqImage)
], File.prototype, "faqImage", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gig_video_entity_1.GigVideo, (gigVideo) => gigVideo.file),
    (0, graphql_1.Field)(() => gig_video_entity_1.GigVideo, { description: 'Gig Video', nullable: true }),
    __metadata("design:type", gig_video_entity_1.GigVideo)
], File.prototype, "gigVideo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gig_gallery_entity_1.GigGallery, (gigGallery) => gigGallery.file),
    (0, graphql_1.Field)(() => gig_gallery_entity_1.GigGallery, { description: 'Gig Gallery', nullable: true }),
    __metadata("design:type", gig_gallery_entity_1.GigGallery)
], File.prototype, "gigGallery", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => reference_entity_1.Reference, (clientReference) => clientReference.file),
    (0, graphql_1.Field)(() => reference_entity_1.Reference, { description: 'Client Reference', nullable: true }),
    __metadata("design:type", reference_entity_1.Reference)
], File.prototype, "clientReference", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => category_entity_1.Category, (category) => category.file),
    (0, graphql_1.Field)(() => category_entity_1.Category, { description: 'category file', nullable: true }),
    __metadata("design:type", category_entity_1.Category)
], File.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => message_entity_1.Message, (message) => message.file),
    (0, graphql_1.Field)(() => message_entity_1.Message, { description: 'Chat files', nullable: true }),
    __metadata("design:type", message_entity_1.Message)
], File.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => banner_entity_1.Banner, (banner) => banner.file),
    (0, graphql_1.Field)(() => banner_entity_1.Banner, { description: 'banner Image', nullable: true }),
    __metadata("design:type", banner_entity_1.Banner)
], File.prototype, "banner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => blog_entity_1.Blog, (blog) => blog.file),
    (0, graphql_1.Field)(() => blog_entity_1.Blog, { description: 'Blog files', nullable: true }),
    __metadata("design:type", blog_entity_1.Blog)
], File.prototype, "blog", void 0);
File = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], File);
exports.File = File;
//# sourceMappingURL=file.entity.js.map