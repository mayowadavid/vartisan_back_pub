"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GigGalleryModule = void 0;
const common_1 = require("@nestjs/common");
const gig_gallery_service_1 = require("./gig-gallery.service");
const gig_gallery_resolver_1 = require("./gig-gallery.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const gig_gallery_entity_1 = require("./entities/gig-gallery.entity");
const file_entity_1 = require("../files/entities/file.entity");
const gig_gallery_controller_1 = require("./gig-gallery.controller");
const files_service_1 = require("../files/files.service");
let GigGalleryModule = class GigGalleryModule {
};
GigGalleryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gig_gallery_entity_1.GigGallery, file_entity_1.File])],
        providers: [gig_gallery_resolver_1.GigGalleryResolver, gig_gallery_service_1.GigGalleryService, files_service_1.FilesService],
        controllers: [gig_gallery_controller_1.GigGalleryController],
    })
], GigGalleryModule);
exports.GigGalleryModule = GigGalleryModule;
//# sourceMappingURL=gig-gallery.module.js.map