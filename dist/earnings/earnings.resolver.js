"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const earnings_service_1 = require("./earnings.service");
const earning_entity_1 = require("./entities/earning.entity");
const create_earning_input_1 = require("./dto/create-earning.input");
let EarningsResolver = class EarningsResolver {
    constructor(earningsService) {
        this.earningsService = earningsService;
    }
    createEarning(createEarningInput) {
        return this.earningsService.create(createEarningInput);
    }
    findAll() {
        return this.earningsService.findAll();
    }
    findOne(id) {
        return this.earningsService.findOne(id);
    }
    removeEarning(id) {
        return this.earningsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => earning_entity_1.Earning),
    __param(0, (0, graphql_1.Args)('createEarningInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_earning_input_1.CreateEarningInput]),
    __metadata("design:returntype", void 0)
], EarningsResolver.prototype, "createEarning", null);
__decorate([
    (0, graphql_1.Query)(() => [earning_entity_1.Earning], { name: 'earnings' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EarningsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => earning_entity_1.Earning, { name: 'earning' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EarningsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => earning_entity_1.Earning),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EarningsResolver.prototype, "removeEarning", null);
EarningsResolver = __decorate([
    (0, graphql_1.Resolver)(() => earning_entity_1.Earning),
    __metadata("design:paramtypes", [earnings_service_1.EarningsService])
], EarningsResolver);
exports.EarningsResolver = EarningsResolver;
//# sourceMappingURL=earnings.resolver.js.map