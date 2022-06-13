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
exports.CreateOrderInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_entity_1 = require("../entities/order.entity");
let CreateOrderInput = class CreateOrderInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'name', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order quantity', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'date', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig image', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "gigImage", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'revision', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "revision", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'approve date', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "approveDate", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order status', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "orderStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order amount', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order source file', nullable: true }),
    __metadata("design:type", Boolean)
], CreateOrderInput.prototype, "sourceFile", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commercial order', nullable: true }),
    __metadata("design:type", Boolean)
], CreateOrderInput.prototype, "commercial", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order', nullable: true }),
    __metadata("design:type", Boolean)
], CreateOrderInput.prototype, "rushOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'private order', nullable: true }),
    __metadata("design:type", Boolean)
], CreateOrderInput.prototype, "privateOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order amount', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "rushOrderAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order delivery', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "rushOrderDelivery", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commercial order amount', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "commercialOrderAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commercial order delivery', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "commercialOrderDelivery", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'private order amount', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "privateOrderAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'private order delivery', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "privateOrderDelivery", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order end', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "end", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order total', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order faq id', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "orderFaqId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order requirement id', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "orderRequirementId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order gig id', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order seller id', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "sellerId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order client id', nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "clientId", void 0);
CreateOrderInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderInput);
exports.CreateOrderInput = CreateOrderInput;
//# sourceMappingURL=create-order.input.js.map