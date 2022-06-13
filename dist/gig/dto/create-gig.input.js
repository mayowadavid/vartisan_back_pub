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
exports.CreateGigInput = exports.UserGigInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_entity_1 = require("../entities/gig.entity");
let UserGigInput = class UserGigInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'gig name', nullable: true }),
    __metadata("design:type", String)
], UserGigInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user name', nullable: true }),
    __metadata("design:type", String)
], UserGigInput.prototype, "userName", void 0);
UserGigInput = __decorate([
    (0, graphql_1.InputType)()
], UserGigInput);
exports.UserGigInput = UserGigInput;
let CreateGigInput = class CreateGigInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'gig name', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig description', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig delivery period', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "deliveryPeriod", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig revision number', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "numberOfRevision", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig revision number', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigInput.prototype, "sourceFile", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig commercial', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigInput.prototype, "commercial", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig ai files', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigInput.prototype, "aiFiles", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig ai files', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigInput.prototype, "customIllustration", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'video gallery id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "galleryVideoId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'image gallery id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "galleryImageId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig file id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'show order', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigInput.prototype, "showOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig terms', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "terms", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig price', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig category id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig sub category id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "subCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig sub category id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig rating Id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "ratingId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig gig format Id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "gigFormatId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig tag id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "gigTagId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "rushOrderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig private commission id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "privateCommissionId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig commercial use id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "commercialUseId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'project date', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig refrence Id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "favoriteId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig refrence Id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "referenceId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig default refrence', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "defaultReference", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig faq id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "gigFaqId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig video id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "gigVideoId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig gallery id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "gigGalleryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earning id', nullable: true }),
    __metadata("design:type", String)
], CreateGigInput.prototype, "earningId", void 0);
CreateGigInput = __decorate([
    (0, graphql_1.InputType)()
], CreateGigInput);
exports.CreateGigInput = CreateGigInput;
//# sourceMappingURL=create-gig.input.js.map