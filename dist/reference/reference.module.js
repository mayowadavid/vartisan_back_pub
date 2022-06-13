"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceModule = void 0;
const common_1 = require("@nestjs/common");
const reference_service_1 = require("./reference.service");
const reference_resolver_1 = require("./reference.resolver");
const reference_entity_1 = require("./entities/reference.entity");
const typeorm_1 = require("@nestjs/typeorm");
const reference_controller_1 = require("./reference.controller");
const file_entity_1 = require("../files/entities/file.entity");
const files_service_1 = require("../files/files.service");
let ReferenceModule = class ReferenceModule {
};
ReferenceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reference_entity_1.Reference, file_entity_1.File])],
        providers: [reference_resolver_1.ReferenceResolver, reference_service_1.ReferenceService, files_service_1.FilesService],
        controllers: [reference_controller_1.ReferenceController],
    })
], ReferenceModule);
exports.ReferenceModule = ReferenceModule;
//# sourceMappingURL=reference.module.js.map