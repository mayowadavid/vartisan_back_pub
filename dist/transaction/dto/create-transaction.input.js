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
exports.CreateTransactionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const transaction_entity_1 = require("../entities/transaction.entity");
let CreateTransactionInput = class CreateTransactionInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'date', nullable: true }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'description', nullable: true }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commission rate', nullable: true }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "commission", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'transaction type', nullable: true }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "transactionType", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'transactionSenderId', nullable: true }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "transactionSenderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'transactionReceiverId', nullable: true }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "transactionReceiverId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earningId', nullable: true }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "earningId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'transaction status', nullable: true }),
    __metadata("design:type", String)
], CreateTransactionInput.prototype, "status", void 0);
CreateTransactionInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTransactionInput);
exports.CreateTransactionInput = CreateTransactionInput;
//# sourceMappingURL=create-transaction.input.js.map