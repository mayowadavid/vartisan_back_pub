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
exports.CreateOrderFaqInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateOrderFaqInput = class CreateOrderFaqInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderFaqInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq name' }),
    __metadata("design:type", String)
], CreateOrderFaqInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq status' }),
    __metadata("design:type", String)
], CreateOrderFaqInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq description' }),
    __metadata("design:type", String)
], CreateOrderFaqInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order Id' }),
    __metadata("design:type", String)
], CreateOrderFaqInput.prototype, "orderId", void 0);
CreateOrderFaqInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderFaqInput);
exports.CreateOrderFaqInput = CreateOrderFaqInput;
//# sourceMappingURL=create-order-faq.input.js.map