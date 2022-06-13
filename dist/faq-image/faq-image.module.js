"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqImageModule = void 0;
const common_1 = require("@nestjs/common");
const faq_image_service_1 = require("./faq-image.service");
const faq_image_resolver_1 = require("./faq-image.resolver");
const faq_image_controller_1 = require("./faq-image.controller");
const typeorm_1 = require("@nestjs/typeorm");
const file_entity_1 = require("../files/entities/file.entity");
const faq_image_entity_1 = require("./entities/faq-image.entity");
const files_service_1 = require("../files/files.service");
let FaqImageModule = class FaqImageModule {
};
FaqImageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([faq_image_entity_1.FaqImage, file_entity_1.File])],
        providers: [faq_image_resolver_1.FaqImageResolver, faq_image_service_1.FaqImageService, files_service_1.FilesService],
        controllers: [faq_image_controller_1.FaqImageController],
    })
], FaqImageModule);
exports.FaqImageModule = FaqImageModule;
//# sourceMappingURL=faq-image.module.js.map