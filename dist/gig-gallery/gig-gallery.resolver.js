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
exports.GigGalleryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_gallery_service_1 = require("./gig-gallery.service");
const gig_gallery_entity_1 = require("./entities/gig-gallery.entity");
const create_gig_gallery_input_1 = require("./dto/create-gig-gallery.input");
const update_gig_gallery_input_1 = require("./dto/update-gig-gallery.input");
let GigGalleryResolver = class GigGalleryResolver {
    constructor(gigGalleryService) {
        this.gigGalleryService = gigGalleryService;
    }
    createGigGallery(createGigGalleryInput) {
        return this.gigGalleryService.create(createGigGalleryInput);
    }
    findAll() {
        return this.gigGalleryService.findAll();
    }
    findOne(id) {
        return this.gigGalleryService.findOne(id);
    }
    updateGigGallery(updateGigGalleryInput) {
        return this.gigGalleryService.update(updateGigGalleryInput.id, updateGigGalleryInput);
    }
    removeGigGallery(id) {
        return this.gigGalleryService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => gig_gallery_entity_1.GigGallery),
    __param(0, (0, graphql_1.Args)('createGigGalleryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gig_gallery_input_1.CreateGigGalleryInput]),
    __metadata("design:returntype", void 0)
], GigGalleryResolver.prototype, "createGigGallery", null);
__decorate([
    (0, graphql_1.Query)(() => [gig_gallery_entity_1.GigGallery], { name: 'gigGallery' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GigGalleryResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => gig_gallery_entity_1.GigGallery, { name: 'gigGallery' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigGalleryResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_gallery_entity_1.GigGallery),
    __param(0, (0, graphql_1.Args)('updateGigGalleryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_gig_gallery_input_1.UpdateGigGalleryInput]),
    __metadata("design:returntype", void 0)
], GigGalleryResolver.prototype, "updateGigGallery", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_gallery_entity_1.GigGallery),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigGalleryResolver.prototype, "removeGigGallery", null);
GigGalleryResolver = __decorate([
    (0, graphql_1.Resolver)(() => gig_gallery_entity_1.GigGallery),
    __metadata("design:paramtypes", [gig_gallery_service_1.GigGalleryService])
], GigGalleryResolver);
exports.GigGalleryResolver = GigGalleryResolver;
//# sourceMappingURL=gig-gallery.resolver.js.map