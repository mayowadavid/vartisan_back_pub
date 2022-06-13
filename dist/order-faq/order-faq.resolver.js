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
exports.OrderFaqResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_faq_service_1 = require("./order-faq.service");
const order_faq_entity_1 = require("./entities/order-faq.entity");
const create_order_faq_input_1 = require("./dto/create-order-faq.input");
const update_order_faq_input_1 = require("./dto/update-order-faq.input");
let OrderFaqResolver = class OrderFaqResolver {
    constructor(orderFaqService) {
        this.orderFaqService = orderFaqService;
    }
    createOrderFaq(createOrderFaqInput) {
        return this.orderFaqService.create(createOrderFaqInput);
    }
    findAll() {
        return this.orderFaqService.findAll();
    }
    findOne(id) {
        return this.orderFaqService.findOne(id);
    }
    updateOrderFaq(updateOrderFaqInput) {
        return this.orderFaqService.update(updateOrderFaqInput.id, updateOrderFaqInput);
    }
    removeOrderFaq(id) {
        return this.orderFaqService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => order_faq_entity_1.OrderFaq),
    __param(0, (0, graphql_1.Args)('createOrderFaqInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_faq_input_1.CreateOrderFaqInput]),
    __metadata("design:returntype", void 0)
], OrderFaqResolver.prototype, "createOrderFaq", null);
__decorate([
    (0, graphql_1.Query)(() => [order_faq_entity_1.OrderFaq], { name: 'orderFaq' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderFaqResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => order_faq_entity_1.OrderFaq, { name: 'orderFaq' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderFaqResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_faq_entity_1.OrderFaq),
    __param(0, (0, graphql_1.Args)('updateOrderFaqInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_order_faq_input_1.UpdateOrderFaqInput]),
    __metadata("design:returntype", void 0)
], OrderFaqResolver.prototype, "updateOrderFaq", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_faq_entity_1.OrderFaq),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderFaqResolver.prototype, "removeOrderFaq", null);
OrderFaqResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_faq_entity_1.OrderFaq),
    __metadata("design:paramtypes", [order_faq_service_1.OrderFaqService])
], OrderFaqResolver);
exports.OrderFaqResolver = OrderFaqResolver;
//# sourceMappingURL=order-faq.resolver.js.map