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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFaq = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
let OrderFaq = class OrderFaq {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrderFaq.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq name' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderFaq.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq status' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderFaq.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq description' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderFaq.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (order) => order.orderFaq),
    (0, graphql_1.Field)(() => order_entity_1.Order, { description: 'order requirement' }),
    __metadata("design:type", order_entity_1.Order)
], OrderFaq.prototype, "order", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'orderId' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderFaq.prototype, "orderId", void 0);
OrderFaq = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], OrderFaq);
exports.OrderFaq = OrderFaq;
//# sourceMappingURL=order-faq.entity.js.map