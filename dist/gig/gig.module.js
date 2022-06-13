"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GigModule = void 0;
const common_1 = require("@nestjs/common");
const gig_service_1 = require("./gig.service");
const gig_resolver_1 = require("./gig.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const gig_entity_1 = require("./entities/gig.entity");
const file_entity_1 = require("../files/entities/file.entity");
const files_service_1 = require("../files/files.service");
let GigModule = class GigModule {
};
GigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gig_entity_1.Gig, file_entity_1.File])],
        providers: [gig_resolver_1.GigResolver, gig_service_1.GigService, files_service_1.FilesService],
    })
], GigModule);
exports.GigModule = GigModule;
//# sourceMappingURL=gig.module.js.map