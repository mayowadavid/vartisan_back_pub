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
exports.UpdateEarningInput = void 0;
const create_earning_input_1 = require("./create-earning.input");
const graphql_1 = require("@nestjs/graphql");
const earning_entity_1 = require("../entities/earning.entity");
let UpdateEarningInput = class UpdateEarningInput extends (0, graphql_1.PartialType)(create_earning_input_1.CreateEarningInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'withdrawn', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "withdrawn", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'status', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'overtime withdrawal', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "overtimeWithdrawn", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'date', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'pending Amount', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "pendingAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig purchased id', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'monthly balance', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "balance", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'overtime balance', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "overtimeEarnings", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'overtime balance', nullable: true }),
    __metadata("design:type", String)
], UpdateEarningInput.prototype, "userId", void 0);
UpdateEarningInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateEarningInput);
exports.UpdateEarningInput = UpdateEarningInput;
//# sourceMappingURL=update-earning.input.js.map