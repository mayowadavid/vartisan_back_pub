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
exports.UpdateOrderRequirementInput = void 0;
const create_order_requirement_input_1 = require("./create-order-requirement.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateOrderRequirementInput = class UpdateOrderRequirementInput extends (0, graphql_1.PartialType)(create_order_requirement_input_1.CreateOrderRequirementInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateOrderRequirementInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order description', nullable: true }),
    __metadata("design:type", String)
], UpdateOrderRequirementInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'requirement creation date', nullable: true }),
    __metadata("design:type", String)
], UpdateOrderRequirementInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order reference', nullable: true }),
    __metadata("design:type", String)
], UpdateOrderRequirementInput.prototype, "reference", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order color', nullable: true }),
    __metadata("design:type", String)
], UpdateOrderRequirementInput.prototype, "color", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order requirement', nullable: true }),
    __metadata("design:type", String)
], UpdateOrderRequirementInput.prototype, "orderId", void 0);
UpdateOrderRequirementInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateOrderRequirementInput);
exports.UpdateOrderRequirementInput = UpdateOrderRequirementInput;
//# sourceMappingURL=update-order-requirement.input.js.map