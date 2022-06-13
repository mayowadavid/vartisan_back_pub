"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GigVideoModule = void 0;
const common_1 = require("@nestjs/common");
const gig_video_service_1 = require("./gig-video.service");
const gig_video_resolver_1 = require("./gig-video.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const gig_video_entity_1 = require("./entities/gig-video.entity");
const file_entity_1 = require("../files/entities/file.entity");
const gig_video_controller_1 = require("./gig-video.controller");
const files_service_1 = require("../files/files.service");
let GigVideoModule = class GigVideoModule {
};
GigVideoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gig_video_entity_1.GigVideo, file_entity_1.File])],
        providers: [gig_video_resolver_1.GigVideoResolver, gig_video_service_1.GigVideoService, files_service_1.FilesService],
        controllers: [gig_video_controller_1.GigVideoController],
    })
], GigVideoModule);
exports.GigVideoModule = GigVideoModule;
//# sourceMappingURL=gig-video.module.js.map