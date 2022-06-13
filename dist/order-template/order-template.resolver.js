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
exports.OrderTemplateResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_template_service_1 = require("./order-template.service");
const order_template_entity_1 = require("./entities/order-template.entity");
const create_order_template_input_1 = require("./dto/create-order-template.input");
const update_order_template_input_1 = require("./dto/update-order-template.input");
let OrderTemplateResolver = class OrderTemplateResolver {
    constructor(orderTemplateService) {
        this.orderTemplateService = orderTemplateService;
    }
    createOrderTemplate(createOrderTemplateInput) {
        return this.orderTemplateService.create(createOrderTemplateInput);
    }
    findAll() {
        return this.orderTemplateService.findAll();
    }
    findOne(id) {
        return this.orderTemplateService.findOne(id);
    }
    updateOrderTemplate(updateOrderTemplateInput) {
        return this.orderTemplateService.update(updateOrderTemplateInput.id, updateOrderTemplateInput);
    }
    removeOrderTemplate(id) {
        return this.orderTemplateService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => order_template_entity_1.OrderTemplate),
    __param(0, (0, graphql_1.Args)('createOrderTemplateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_template_input_1.CreateOrderTemplateInput]),
    __metadata("design:returntype", void 0)
], OrderTemplateResolver.prototype, "createOrderTemplate", null);
__decorate([
    (0, graphql_1.Query)(() => [order_template_entity_1.OrderTemplate], { name: 'orderTemplate' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderTemplateResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => order_template_entity_1.OrderTemplate, { name: 'orderTemplate' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderTemplateResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_template_entity_1.OrderTemplate),
    __param(0, (0, graphql_1.Args)('updateOrderTemplateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_order_template_input_1.UpdateOrderTemplateInput]),
    __metadata("design:returntype", void 0)
], OrderTemplateResolver.prototype, "updateOrderTemplate", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_template_entity_1.OrderTemplate),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderTemplateResolver.prototype, "removeOrderTemplate", null);
OrderTemplateResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_template_entity_1.OrderTemplate),
    __metadata("design:paramtypes", [order_template_service_1.OrderTemplateService])
], OrderTemplateResolver);
exports.OrderTemplateResolver = OrderTemplateResolver;
//# sourceMappingURL=order-template.resolver.js.map