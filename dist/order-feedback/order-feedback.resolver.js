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
exports.OrderFeedbackResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_feedback_service_1 = require("./order-feedback.service");
const order_feedback_entity_1 = require("./entities/order-feedback.entity");
const create_order_feedback_input_1 = require("./dto/create-order-feedback.input");
const update_order_feedback_input_1 = require("./dto/update-order-feedback.input");
let OrderFeedbackResolver = class OrderFeedbackResolver {
    constructor(orderFeedbackService) {
        this.orderFeedbackService = orderFeedbackService;
    }
    createOrderFeedback(createOrderFeedbackInput) {
        return this.orderFeedbackService.create(createOrderFeedbackInput);
    }
    findAll() {
        return this.orderFeedbackService.findAll();
    }
    findOne(id) {
        return this.orderFeedbackService.findOne(id);
    }
    updateOrderFeedback(updateOrderFeedbackInput) {
        return this.orderFeedbackService.update(updateOrderFeedbackInput.id, updateOrderFeedbackInput);
    }
    removeOrderFeedback(id) {
        return this.orderFeedbackService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => order_feedback_entity_1.OrderFeedback),
    __param(0, (0, graphql_1.Args)('createOrderFeedbackInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_feedback_input_1.CreateOrderFeedbackInput]),
    __metadata("design:returntype", void 0)
], OrderFeedbackResolver.prototype, "createOrderFeedback", null);
__decorate([
    (0, graphql_1.Query)(() => [order_feedback_entity_1.OrderFeedback], { name: 'orderFeedback' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderFeedbackResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => order_feedback_entity_1.OrderFeedback, { name: 'orderFeedback' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderFeedbackResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_feedback_entity_1.OrderFeedback),
    __param(0, (0, graphql_1.Args)('updateOrderFeedbackInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_order_feedback_input_1.UpdateOrderFeedbackInput]),
    __metadata("design:returntype", void 0)
], OrderFeedbackResolver.prototype, "updateOrderFeedback", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_feedback_entity_1.OrderFeedback),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderFeedbackResolver.prototype, "removeOrderFeedback", null);
OrderFeedbackResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_feedback_entity_1.OrderFeedback),
    __metadata("design:paramtypes", [order_feedback_service_1.OrderFeedbackService])
], OrderFeedbackResolver);
exports.OrderFeedbackResolver = OrderFeedbackResolver;
//# sourceMappingURL=order-feedback.resolver.js.map