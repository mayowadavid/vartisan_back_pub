"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateCommissionModule = void 0;
const common_1 = require("@nestjs/common");
const private_commission_service_1 = require("./private-commission.service");
const private_commission_resolver_1 = require("./private-commission.resolver");
const private_commission_entity_1 = require("./entities/private-commission.entity");
const typeorm_1 = require("@nestjs/typeorm");
let PrivateCommissionModule = class PrivateCommissionModule {
};
PrivateCommissionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([private_commission_entity_1.PrivateCommission])],
        providers: [private_commission_resolver_1.PrivateCommissionResolver, private_commission_service_1.PrivateCommissionService],
        exports: [private_commission_service_1.PrivateCommissionService],
    })
], PrivateCommissionModule);
exports.PrivateCommissionModule = PrivateCommissionModule;
//# sourceMappingURL=private-commission.module.js.map