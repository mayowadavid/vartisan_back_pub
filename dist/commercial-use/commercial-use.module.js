"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommercialUseModule = void 0;
const common_1 = require("@nestjs/common");
const commercial_use_service_1 = require("./commercial-use.service");
const commercial_use_resolver_1 = require("./commercial-use.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const commercial_use_entity_1 = require("./entities/commercial-use.entity");
let CommercialUseModule = class CommercialUseModule {
};
CommercialUseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([commercial_use_entity_1.CommercialUse])],
        providers: [commercial_use_resolver_1.CommercialUseResolver, commercial_use_service_1.CommercialUseService],
    })
], CommercialUseModule);
exports.CommercialUseModule = CommercialUseModule;
//# sourceMappingURL=commercial-use.module.js.map