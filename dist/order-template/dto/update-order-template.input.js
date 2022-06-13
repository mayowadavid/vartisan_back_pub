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
exports.UpdateOrderTemplateInput = void 0;
const create_order_template_input_1 = require("./create-order-template.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateOrderTemplateInput = class UpdateOrderTemplateInput extends (0, graphql_1.PartialType)(create_order_template_input_1.CreateOrderTemplateInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateOrderTemplateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user message' }),
    __metadata("design:type", String)
], UpdateOrderTemplateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'date' }),
    __metadata("design:type", String)
], UpdateOrderTemplateInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'revision' }),
    __metadata("design:type", String)
], UpdateOrderTemplateInput.prototype, "revision", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order status' }),
    __metadata("design:type", String)
], UpdateOrderTemplateInput.prototype, "orderStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order amount' }),
    __metadata("design:type", String)
], UpdateOrderTemplateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order count' }),
    __metadata("design:type", String)
], UpdateOrderTemplateInput.prototype, "orderCount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order source file' }),
    __metadata("design:type", Boolean)
], UpdateOrderTemplateInput.prototype, "sourceFile", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commercial order' }),
    __metadata("design:type", Boolean)
], UpdateOrderTemplateInput.prototype, "commercial", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order' }),
    __metadata("design:type", Boolean)
], UpdateOrderTemplateInput.prototype, "rushOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order end' }),
    __metadata("design:type", String)
], UpdateOrderTemplateInput.prototype, "end", void 0);
UpdateOrderTemplateInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateOrderTemplateInput);
exports.UpdateOrderTemplateInput = UpdateOrderTemplateInput;
//# sourceMappingURL=update-order-template.input.js.map