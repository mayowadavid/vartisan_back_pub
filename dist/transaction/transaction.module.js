"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
const transaction_resolver_1 = require("./transaction.resolver");
const earnings_service_1 = require("../earnings/earnings.service");
const typeorm_1 = require("@nestjs/typeorm");
const earning_entity_1 = require("../earnings/entities/earning.entity");
const earnings_module_1 = require("../earnings/earnings.module");
const transaction_entity_1 = require("./entities/transaction.entity");
let TransactionModule = class TransactionModule {
};
TransactionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([transaction_entity_1.Transaction, earning_entity_1.Earning]), earnings_module_1.EarningsModule],
        providers: [transaction_resolver_1.TransactionResolver, transaction_service_1.TransactionService, earnings_service_1.EarningsService],
    })
], TransactionModule);
exports.TransactionModule = TransactionModule;
//# sourceMappingURL=transaction.module.js.map