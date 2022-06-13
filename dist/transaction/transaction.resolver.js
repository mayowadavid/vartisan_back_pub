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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const transaction_service_1 = require("./transaction.service");
const transaction_entity_1 = require("./entities/transaction.entity");
const create_transaction_input_1 = require("./dto/create-transaction.input");
const update_transaction_input_1 = require("./dto/update-transaction.input");
const gql_users_guard_1 = require("../users/gql-users.guard");
const common_1 = require("@nestjs/common");
const current_user_1 = require("../users/current-user");
let TransactionResolver = class TransactionResolver {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    createTransaction(createTransactionInput) {
        return this.transactionService.create(createTransactionInput);
    }
    findAll() {
        return this.transactionService.findAll();
    }
    findOne(id) {
        return this.transactionService.findOne(id);
    }
    updateTransaction(user, updateTransactionInput) {
        return this.transactionService.update(user, updateTransactionInput.id, updateTransactionInput);
    }
    removeTransaction(id) {
        return this.transactionService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => transaction_entity_1.Transaction),
    __param(0, (0, graphql_1.Args)('createTransactionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_input_1.CreateTransactionInput]),
    __metadata("design:returntype", void 0)
], TransactionResolver.prototype, "createTransaction", null);
__decorate([
    (0, graphql_1.Query)(() => [transaction_entity_1.Transaction], { name: 'transaction' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => transaction_entity_1.Transaction, { name: 'transaction' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => transaction_entity_1.Transaction),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('updateTransactionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_transaction_input_1.UpdateTransactionInput]),
    __metadata("design:returntype", void 0)
], TransactionResolver.prototype, "updateTransaction", null);
__decorate([
    (0, graphql_1.Mutation)(() => transaction_entity_1.Transaction),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionResolver.prototype, "removeTransaction", null);
TransactionResolver = __decorate([
    (0, graphql_1.Resolver)(() => transaction_entity_1.Transaction),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionResolver);
exports.TransactionResolver = TransactionResolver;
//# sourceMappingURL=transaction.resolver.js.map