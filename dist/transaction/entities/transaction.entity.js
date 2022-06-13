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
exports.Transaction = exports.TransactionType = exports.TransactionStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const earning_entity_1 = require("../../earnings/entities/earning.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["APPROVED"] = "approved";
    TransactionStatus["REJECTED"] = "rejected";
    TransactionStatus["PENDING"] = "pending";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["WITHDRAWAL"] = "withdrawal";
    TransactionType["PAYMENT"] = "payment";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
let Transaction = class Transaction {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'description', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commission rate', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "commission", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'transaction type', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: TransactionType,
        default: 'payment',
    }),
    __metadata("design:type", String)
], Transaction.prototype, "transactionType", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'transactionSenderId', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "transactionSenderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'transactionReceiverId', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "transactionReceiverId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earningId', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "earningId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'transaction status', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: TransactionStatus,
        default: 'pending',
    }),
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => earning_entity_1.Earning, (earning) => earning.transaction),
    (0, graphql_1.Field)(() => earning_entity_1.Earning, { description: 'earning transaction' }),
    __metadata("design:type", earning_entity_1.Earning)
], Transaction.prototype, "earning", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.transactionSender),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'transactionSender' }),
    __metadata("design:type", user_entity_1.User)
], Transaction.prototype, "transactionSender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.transactionReceiver),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'transactionReceiver' }),
    __metadata("design:type", user_entity_1.User)
], Transaction.prototype, "transactionReceiver", void 0);
Transaction = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map