"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GigTagsModule = void 0;
const common_1 = require("@nestjs/common");
const gig_tags_service_1 = require("./gig-tags.service");
const gig_tags_resolver_1 = require("./gig-tags.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const gig_tag_entity_1 = require("./entities/gig-tag.entity");
let GigTagsModule = class GigTagsModule {
};
GigTagsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gig_tag_entity_1.GigTag])],
        providers: [gig_tags_resolver_1.GigTagsResolver, gig_tags_service_1.GigTagsService],
    })
], GigTagsModule);
exports.GigTagsModule = GigTagsModule;
//# sourceMappingURL=gig-tags.module.js.map