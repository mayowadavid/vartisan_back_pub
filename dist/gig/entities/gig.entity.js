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
exports.Gig = exports.GigStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_entity_1 = require("../../categories/entities/category.entity");
const commercial_use_entity_1 = require("../../commercial-use/entities/commercial-use.entity");
const favorite_entity_1 = require("../../favorites/entities/favorite.entity");
const gig_faq_entity_1 = require("../../gig-faq/entities/gig-faq.entity");
const gig_requirement_entity_1 = require("../../gig-requirement/entities/gig-requirement.entity");
const gig_tag_entity_1 = require("../../gig-tags/entities/gig-tag.entity");
const gig_video_entity_1 = require("../../gig-video/entities/gig-video.entity");
const gig_gallery_entity_1 = require("../../gig-gallery/entities/gig-gallery.entity");
const gigformat_entity_1 = require("../../gigformat/entities/gigformat.entity");
const private_commission_entity_1 = require("../../private-commission/entities/private-commission.entity");
const rating_entity_1 = require("../../rating/entities/rating.entity");
const reference_entity_1 = require("../../reference/entities/reference.entity");
const rush_order_entity_1 = require("../../rush-order/entities/rush-order.entity");
const sub_category_entity_1 = require("../../sub-category/entities/sub-category.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const earning_entity_1 = require("../../earnings/entities/earning.entity");
var GigStatus;
(function (GigStatus) {
    GigStatus["DRAFT"] = "draft";
    GigStatus["PAUSED"] = "paused";
    GigStatus["ACTIVE"] = "active";
})(GigStatus = exports.GigStatus || (exports.GigStatus = {}));
let Gig = class Gig {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Gig.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig description', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig delivery period', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "deliveryPeriod", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig revision number', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "numberOfRevision", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig source file', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gig.prototype, "sourceFile", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig commercial', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gig.prototype, "commercial", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig ai files', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gig.prototype, "aiFiles", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig ai files', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gig.prototype, "customIllustration", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig file id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'show order', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gig.prototype, "showOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig terms', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "terms", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig price', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig category id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig sub category id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "subCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig status', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: 'enum', enum: GigStatus, default: 'paused' }),
    __metadata("design:type", String)
], Gig.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig rating Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "ratingId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig gig format Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "gigFormatId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig refrence Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "favoriteId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig refrence Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "referenceId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig default refrence', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "defaultReference", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig faq id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "gigFaqId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig tag id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "gigTagId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "rushOrderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig gallery id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "gigGalleryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig video id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "gigVideoId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig private commission id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "privateCommissionId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig commercial use id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "commercialUseId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'project date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earning id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gig.prototype, "earningId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => earning_entity_1.Earning, (earning) => earning.gig),
    (0, graphql_1.Field)(() => earning_entity_1.Earning, { description: 'gig purchased', nullable: true }),
    __metadata("design:type", earning_entity_1.Earning)
], Gig.prototype, "earning", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.gig),
    (0, graphql_1.Field)(() => [order_entity_1.Order], { description: 'gig order', nullable: true }),
    __metadata("design:type", Array)
], Gig.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => rush_order_entity_1.RushOrder, (rushOrder) => rushOrder.gig),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => rush_order_entity_1.RushOrder, { description: 'rush order', nullable: true }),
    __metadata("design:type", rush_order_entity_1.RushOrder)
], Gig.prototype, "rushOrder", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => commercial_use_entity_1.CommercialUse, (commercialUse) => commercialUse.gig),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => commercial_use_entity_1.CommercialUse, { description: 'rush order', nullable: true }),
    __metadata("design:type", commercial_use_entity_1.CommercialUse)
], Gig.prototype, "commercialUse", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => private_commission_entity_1.PrivateCommission, (privateCommission) => privateCommission.gig),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => private_commission_entity_1.PrivateCommission, {
        description: 'private commission',
        nullable: true,
    }),
    __metadata("design:type", private_commission_entity_1.PrivateCommission)
], Gig.prototype, "privateCommission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.gig),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => category_entity_1.Category, { description: 'gig category', nullable: true }),
    __metadata("design:type", category_entity_1.Category)
], Gig.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.gig),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'user', nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Gig.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sub_category_entity_1.SubCategory, (subCategory) => subCategory.gig),
    (0, graphql_1.Field)(() => sub_category_entity_1.SubCategory, { description: 'gig category', nullable: true }),
    __metadata("design:type", sub_category_entity_1.SubCategory)
], Gig.prototype, "subCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reference_entity_1.Reference, (referenceGig) => referenceGig.gigReference),
    (0, graphql_1.Field)(() => [reference_entity_1.Reference], { description: 'Client Reference', nullable: true }),
    __metadata("design:type", Array)
], Gig.prototype, "referenceGig", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_tag_entity_1.GigTag, (gigTag) => gigTag.gig, {
        cascade: true,
    }),
    (0, graphql_1.Field)(() => [gig_tag_entity_1.GigTag], { description: 'Gig tag', nullable: true }),
    __metadata("design:type", Array)
], Gig.prototype, "gigTag", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.Favorite, (favorite) => favorite.gig),
    (0, graphql_1.Field)(() => [favorite_entity_1.Favorite], { description: 'Gig favorite' }),
    __metadata("design:type", Array)
], Gig.prototype, "favorite", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => gigformat_entity_1.Gigformat, (gigFormat) => gigFormat.gig),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => gigformat_entity_1.Gigformat, { description: 'gig format', nullable: true }),
    __metadata("design:type", gigformat_entity_1.Gigformat)
], Gig.prototype, "gigFormat", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, (rating) => rating.gig),
    (0, graphql_1.Field)(() => [rating_entity_1.Rating], { description: 'Gallery rating', nullable: true }),
    __metadata("design:type", Array)
], Gig.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_faq_entity_1.GigFaq, (gigFaq) => gigFaq.gig),
    (0, graphql_1.Field)(() => [gig_faq_entity_1.GigFaq], { description: 'gig faq', nullable: true }),
    __metadata("design:type", Array)
], Gig.prototype, "gigFaq", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_requirement_entity_1.GigRequirement, (gigRequirement) => gigRequirement.gig),
    (0, graphql_1.Field)(() => [gig_requirement_entity_1.GigRequirement], {
        description: 'gig requirement',
        nullable: true,
    }),
    __metadata("design:type", Array)
], Gig.prototype, "gigRequirement", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_gallery_entity_1.GigGallery, (gigGallery) => gigGallery.gig),
    (0, graphql_1.Field)(() => [gig_gallery_entity_1.GigGallery], {
        description: 'gig gallery image',
        nullable: true,
    }),
    __metadata("design:type", Array)
], Gig.prototype, "gigGallery", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_video_entity_1.GigVideo, (gigVideo) => gigVideo.gig),
    (0, graphql_1.Field)(() => [gig_video_entity_1.GigVideo], { description: 'gallery video', nullable: true }),
    __metadata("design:type", Array)
], Gig.prototype, "gigVideo", void 0);
Gig = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Gig);
exports.Gig = Gig;
//# sourceMappingURL=gig.entity.js.map