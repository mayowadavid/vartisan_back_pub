"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GigRequirementModule = void 0;
const common_1 = require("@nestjs/common");
const gig_requirement_service_1 = require("./gig-requirement.service");
const gig_requirement_resolver_1 = require("./gig-requirement.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const gig_requirement_entity_1 = require("./entities/gig-requirement.entity");
let GigRequirementModule = class GigRequirementModule {
};
GigRequirementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gig_requirement_entity_1.GigRequirement])],
        providers: [gig_requirement_resolver_1.GigRequirementResolver, gig_requirement_service_1.GigRequirementService],
    })
], GigRequirementModule);
exports.GigRequirementModule = GigRequirementModule;
//# sourceMappingURL=gig-requirement.module.js.map