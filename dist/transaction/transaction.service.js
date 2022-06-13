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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_entity_1 = require("./entities/transaction.entity");
const earning_entity_1 = require("../earnings/entities/earning.entity");
let TransactionService = class TransactionService {
    constructor(transactionRepository, earningRepository) {
        this.transactionRepository = transactionRepository;
        this.earningRepository = earningRepository;
    }
    create(createTransactionInput) {
        const transaction = this.transactionRepository.create(createTransactionInput);
        if (transaction.transactionType == 'payment') {
            this.earningRepository.findOne();
        }
        return this.transactionRepository.save(transaction);
    }
    findAll() {
        return this.transactionRepository.find();
    }
    findOne(id) {
        return this.transactionRepository.findOne(id);
    }
    async update(user, id, updateTransactionInput) {
        const wallet = await this.transactionRepository.findOne({
            where: {
                user,
            },
        });
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateTransactionInput);
        const result = Object.assign(Object.assign({}, wallet), value);
        return this.transactionRepository.save(result);
    }
    async remove(id) {
        const deleteTransaction = await this.transactionRepository.findOne(id);
        await this.transactionRepository.remove(deleteTransaction);
        return deleteTransaction;
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __param(1, (0, typeorm_1.InjectRepository)(earning_entity_1.Earning)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map