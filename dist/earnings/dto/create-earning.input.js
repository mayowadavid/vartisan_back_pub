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
exports.CreateEarningInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const earning_entity_1 = require("../entities/earning.entity");
let CreateEarningInput = class CreateEarningInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'withdrawn', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "withdrawn", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'status', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'overtime withdrawal', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "overtimeWithdrawn", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'date', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'pending Amount', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "pendingAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig purchased id', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'monthly balance', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "balance", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'overtime balance', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "overtimeEarnings", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'overtime balance', nullable: true }),
    __metadata("design:type", String)
], CreateEarningInput.prototype, "userId", void 0);
CreateEarningInput = __decorate([
    (0, graphql_1.InputType)()
], CreateEarningInput);
exports.CreateEarningInput = CreateEarningInput;
//# sourceMappingURL=create-earning.input.js.map