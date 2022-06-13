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
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_service_1 = require("./order.service");
const order_entity_1 = require("./entities/order.entity");
const create_order_input_1 = require("./dto/create-order.input");
const update_order_input_1 = require("./dto/update-order.input");
const gql_users_guard_1 = require("../users/gql-users.guard");
const common_1 = require("@nestjs/common");
const current_user_1 = require("../users/current-user");
let OrderResolver = class OrderResolver {
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(user, createOrderInput) {
        return this.orderService.create(user, createOrderInput);
    }
    findAll() {
        return this.orderService.findAll();
    }
    findOne(id) {
        return this.orderService.findOne(id);
    }
    findClientOrder(user) {
        return this.orderService.findClientOrder(user);
    }
    findSellerOrder(user) {
        return this.orderService.findSellerOrder(user);
    }
    updateOrder(user, updateOrderInput) {
        return this.orderService.update(user, updateOrderInput.id, updateOrderInput);
    }
    removeOrder(id) {
        return this.orderService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_order_input_1.CreateOrderInput]),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Query)(() => [order_entity_1.Order], { name: 'findAllOrders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => order_entity_1.Order, { name: 'order' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [order_entity_1.Order], { name: 'findClientOrder' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "findClientOrder", null);
__decorate([
    (0, graphql_1.Query)(() => [order_entity_1.Order], { name: 'findSellerOrder' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "findSellerOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('updateOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_order_input_1.UpdateOrderInput]),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "updateOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "removeOrder", null);
OrderResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_entity_1.Order),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.resolver.js.map