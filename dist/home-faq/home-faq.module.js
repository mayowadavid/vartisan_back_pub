"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeFaqModule = void 0;
const common_1 = require("@nestjs/common");
const home_faq_service_1 = require("./home-faq.service");
const home_faq_resolver_1 = require("./home-faq.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const home_faq_entity_1 = require("./entities/home-faq.entity");
let HomeFaqModule = class HomeFaqModule {
};
HomeFaqModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([home_faq_entity_1.HomeFaq])],
        providers: [home_faq_resolver_1.HomeFaqResolver, home_faq_service_1.HomeFaqService],
    })
], HomeFaqModule);
exports.HomeFaqModule = HomeFaqModule;
//# sourceMappingURL=home-faq.module.js.map