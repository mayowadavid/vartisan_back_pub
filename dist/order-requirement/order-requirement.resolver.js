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
exports.OrderRequirementResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_requirement_service_1 = require("./order-requirement.service");
const order_requirement_entity_1 = require("./entities/order-requirement.entity");
const create_order_requirement_input_1 = require("./dto/create-order-requirement.input");
const update_order_requirement_input_1 = require("./dto/update-order-requirement.input");
let OrderRequirementResolver = class OrderRequirementResolver {
    constructor(orderRequirementService) {
        this.orderRequirementService = orderRequirementService;
    }
    createOrderRequirement(createOrderRequirementInput) {
        return this.orderRequirementService.create(createOrderRequirementInput);
    }
    findAll() {
        return this.orderRequirementService.findAll();
    }
    findOne(id) {
        return this.orderRequirementService.findOne(id);
    }
    updateOrderRequirement(updateOrderRequirementInput) {
        return this.orderRequirementService.update(updateOrderRequirementInput.id, updateOrderRequirementInput);
    }
    removeOrderRequirement(id) {
        return this.orderRequirementService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => order_requirement_entity_1.OrderRequirement),
    __param(0, (0, graphql_1.Args)('createOrderRequirementInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_requirement_input_1.CreateOrderRequirementInput]),
    __metadata("design:returntype", void 0)
], OrderRequirementResolver.prototype, "createOrderRequirement", null);
__decorate([
    (0, graphql_1.Query)(() => [order_requirement_entity_1.OrderRequirement], { name: 'orderRequirement' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderRequirementResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => order_requirement_entity_1.OrderRequirement, { name: 'orderRequirement' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderRequirementResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_requirement_entity_1.OrderRequirement),
    __param(0, (0, graphql_1.Args)('updateOrderRequirementInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_order_requirement_input_1.UpdateOrderRequirementInput]),
    __metadata("design:returntype", void 0)
], OrderRequirementResolver.prototype, "updateOrderRequirement", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_requirement_entity_1.OrderRequirement),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderRequirementResolver.prototype, "removeOrderRequirement", null);
OrderRequirementResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_requirement_entity_1.OrderRequirement),
    __metadata("design:paramtypes", [order_requirement_service_1.OrderRequirementService])
], OrderRequirementResolver);
exports.OrderRequirementResolver = OrderRequirementResolver;
//# sourceMappingURL=order-requirement.resolver.js.map