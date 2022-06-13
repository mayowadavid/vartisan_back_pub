"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsModule = void 0;
const common_1 = require("@nestjs/common");
const earnings_service_1 = require("./earnings.service");
const earnings_resolver_1 = require("./earnings.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const earning_entity_1 = require("./entities/earning.entity");
let EarningsModule = class EarningsModule {
};
EarningsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([earning_entity_1.Earning])],
        providers: [earnings_resolver_1.EarningsResolver, earnings_service_1.EarningsService],
        exports: [earnings_service_1.EarningsService],
    })
], EarningsModule);
exports.EarningsModule = EarningsModule;
//# sourceMappingURL=earnings.module.js.map