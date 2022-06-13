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
exports.RushOrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const rush_order_service_1 = require("./rush-order.service");
const rush_order_entity_1 = require("./entities/rush-order.entity");
const create_rush_order_input_1 = require("./dto/create-rush-order.input");
const update_rush_order_input_1 = require("./dto/update-rush-order.input");
let RushOrderResolver = class RushOrderResolver {
    constructor(rushOrderService) {
        this.rushOrderService = rushOrderService;
    }
    createRushOrder(createRushOrderInput) {
        return this.rushOrderService.create(createRushOrderInput);
    }
    findAll() {
        return this.rushOrderService.findAll();
    }
    findOne(id) {
        return this.rushOrderService.findOne(id);
    }
    updateRushOrder(updateRushOrderInput) {
        return this.rushOrderService.update(updateRushOrderInput.id, updateRushOrderInput);
    }
    removeRushOrder(id) {
        return this.rushOrderService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => rush_order_entity_1.RushOrder),
    __param(0, (0, graphql_1.Args)('createRushOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rush_order_input_1.CreateRushOrderInput]),
    __metadata("design:returntype", void 0)
], RushOrderResolver.prototype, "createRushOrder", null);
__decorate([
    (0, graphql_1.Query)(() => [rush_order_entity_1.RushOrder], { name: 'rushOrder' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RushOrderResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => rush_order_entity_1.RushOrder, { name: 'rushOrder' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RushOrderResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => rush_order_entity_1.RushOrder),
    __param(0, (0, graphql_1.Args)('updateRushOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_rush_order_input_1.UpdateRushOrderInput]),
    __metadata("design:returntype", void 0)
], RushOrderResolver.prototype, "updateRushOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => rush_order_entity_1.RushOrder),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RushOrderResolver.prototype, "removeRushOrder", null);
RushOrderResolver = __decorate([
    (0, graphql_1.Resolver)(() => rush_order_entity_1.RushOrder),
    __metadata("design:paramtypes", [rush_order_service_1.RushOrderService])
], RushOrderResolver);
exports.RushOrderResolver = RushOrderResolver;
//# sourceMappingURL=rush-order.resolver.js.map