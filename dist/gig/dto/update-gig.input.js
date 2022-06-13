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
exports.UpdateGigInput = void 0;
const create_gig_input_1 = require("./create-gig.input");
const graphql_1 = require("@nestjs/graphql");
const gig_entity_1 = require("../entities/gig.entity");
let UpdateGigInput = class UpdateGigInput extends (0, graphql_1.PartialType)(create_gig_input_1.CreateGigInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig name', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig description', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig delivery period', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "deliveryPeriod", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig revision number', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "numberOfRevision", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig revision number', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigInput.prototype, "sourceFile", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig commercial', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigInput.prototype, "commercial", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig ai files', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigInput.prototype, "aiFiles", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig ai files', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigInput.prototype, "customIllustration", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'video gallery id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "galleryVideoId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'image gallery id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "galleryImageId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig file id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'show order', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigInput.prototype, "showOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig terms', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "terms", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig price', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig category id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig sub category id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "subCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig sub category id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig rating Id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "ratingId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig gig format Id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "gigFormatId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig tag id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "gigTagId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "rushOrderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig private commission id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "privateCommissionId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig commercial use id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "commercialUseId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'project date', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig refrence Id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "favoriteId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig refrence Id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "referenceId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig default reference', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "defaultReference", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig faq id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "gigFaqId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig video id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "gigVideoId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig gallery id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "gigGalleryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earning id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigInput.prototype, "earningId", void 0);
UpdateGigInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateGigInput);
exports.UpdateGigInput = UpdateGigInput;
//# sourceMappingURL=update-gig.input.js.map