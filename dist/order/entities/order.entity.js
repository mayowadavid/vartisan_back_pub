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
exports.Order = exports.OrderStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_faq_entity_1 = require("../../order-faq/entities/order-faq.entity");
const order_requirement_entity_1 = require("../../order-requirement/entities/order-requirement.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const message_entity_1 = require("../../messages/entities/message.entity");
const typeorm_1 = require("typeorm");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["WITHDRAWN"] = "withdrawn";
    OrderStatus["NOT_ACTIVE"] = "not_active";
    OrderStatus["REVISION"] = "revision";
    OrderStatus["ACTIVE"] = "active";
    OrderStatus["COMPLETED"] = "completed";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
let Order = class Order {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order quantity', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig image', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "gigImage", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'revision', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "revision", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'approve date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "approveDate", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'vartisan', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "vartisan", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order status', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: OrderStatus,
        default: 'not_active',
    }),
    __metadata("design:type", String)
], Order.prototype, "orderStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order amount', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order source file', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Order.prototype, "sourceFile", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commercial order', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Order.prototype, "commercial", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Order.prototype, "rushOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'private order', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Order.prototype, "privateOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order amount', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "rushOrderAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order delivery', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "rushOrderDelivery", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commercial order amount', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "commercialOrderAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commercial order delivery', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "commercialOrderDelivery", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'private order amount', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "privateOrderAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'private order delivery', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "privateOrderDelivery", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order end', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "end", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order total', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order gig id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order requirement id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "orderRequirementId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order seller id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "sellerId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order client id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.seller),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'user orders seller', nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.client),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'user orders client', nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gig_entity_1.Gig, (gig) => gig.order),
    (0, graphql_1.Field)(() => gig_entity_1.Gig, { description: 'gig order', nullable: true }),
    __metadata("design:type", gig_entity_1.Gig)
], Order.prototype, "gig", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, (message) => message.order),
    (0, graphql_1.Field)(() => [message_entity_1.Message], { description: 'order message', nullable: true }),
    __metadata("design:type", Array)
], Order.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_faq_entity_1.OrderFaq, (orderFaq) => orderFaq.order),
    (0, graphql_1.Field)(() => [order_faq_entity_1.OrderFaq], { description: 'order requirement', nullable: true }),
    __metadata("design:type", Array)
], Order.prototype, "orderFaq", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order faq id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "orderFaqId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_requirement_entity_1.OrderRequirement, (orderRequirement) => orderRequirement.order),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => order_requirement_entity_1.OrderRequirement, {
        description: 'order requirement',
        nullable: true,
    }),
    __metadata("design:type", order_requirement_entity_1.OrderRequirement)
], Order.prototype, "orderRequirement", void 0);
Order = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map