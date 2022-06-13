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
exports.PrivateCommissionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const private_commission_service_1 = require("./private-commission.service");
const private_commission_entity_1 = require("./entities/private-commission.entity");
const create_private_commission_input_1 = require("./dto/create-private-commission.input");
const update_private_commission_input_1 = require("./dto/update-private-commission.input");
let PrivateCommissionResolver = class PrivateCommissionResolver {
    constructor(privateCommissionService) {
        this.privateCommissionService = privateCommissionService;
    }
    createPrivateCommission(createPrivateCommissionInput) {
        return this.privateCommissionService.create(createPrivateCommissionInput);
    }
    findAll() {
        return this.privateCommissionService.findAll();
    }
    findOne(id) {
        return this.privateCommissionService.findOne(id);
    }
    updatePrivateCommission(updatePrivateCommissionInput) {
        return this.privateCommissionService.update(updatePrivateCommissionInput.id, updatePrivateCommissionInput);
    }
    removePrivateCommission(id) {
        return this.privateCommissionService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => private_commission_entity_1.PrivateCommission),
    __param(0, (0, graphql_1.Args)('createPrivateCommissionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_private_commission_input_1.CreatePrivateCommissionInput]),
    __metadata("design:returntype", void 0)
], PrivateCommissionResolver.prototype, "createPrivateCommission", null);
__decorate([
    (0, graphql_1.Query)(() => [private_commission_entity_1.PrivateCommission], { name: 'privateCommission' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrivateCommissionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => private_commission_entity_1.PrivateCommission, { name: 'privateCommission' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrivateCommissionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => private_commission_entity_1.PrivateCommission),
    __param(0, (0, graphql_1.Args)('updatePrivateCommissionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_private_commission_input_1.UpdatePrivateCommissionInput]),
    __metadata("design:returntype", void 0)
], PrivateCommissionResolver.prototype, "updatePrivateCommission", null);
__decorate([
    (0, graphql_1.Mutation)(() => private_commission_entity_1.PrivateCommission),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrivateCommissionResolver.prototype, "removePrivateCommission", null);
PrivateCommissionResolver = __decorate([
    (0, graphql_1.Resolver)(() => private_commission_entity_1.PrivateCommission),
    __metadata("design:paramtypes", [private_commission_service_1.PrivateCommissionService])
], PrivateCommissionResolver);
exports.PrivateCommissionResolver = PrivateCommissionResolver;
//# sourceMappingURL=private-commission.resolver.js.map