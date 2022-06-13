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
exports.Earning = exports.EarningStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const transaction_entity_1 = require("../../transaction/entities/transaction.entity");
var EarningStatus;
(function (EarningStatus) {
    EarningStatus["APPROVED"] = "approved";
    EarningStatus["REJECTED"] = "rejected";
    EarningStatus["PENDING"] = "pending";
})(EarningStatus = exports.EarningStatus || (exports.EarningStatus = {}));
let Earning = class Earning {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Earning.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'withdrawn', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Earning.prototype, "withdrawn", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earning status', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: EarningStatus,
        default: 'pending',
    }),
    __metadata("design:type", String)
], Earning.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'overtime withdrawal', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Earning.prototype, "overtimeWithdrawn", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Earning.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'pending Amount', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Earning.prototype, "pendingAmount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'monthly balance', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Earning.prototype, "balance", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'overtime balance', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Earning.prototype, "overtimeEarnings", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Earning.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Earning.prototype, "gigId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.Transaction, (transaction) => transaction.earning),
    (0, graphql_1.Field)(() => [transaction_entity_1.Transaction], {
        description: 'gig transaction',
        nullable: true,
    }),
    __metadata("design:type", Array)
], Earning.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_entity_1.Gig, (gig) => gig.earning),
    (0, graphql_1.Field)(() => [gig_entity_1.Gig], { description: 'gig purchased', nullable: true }),
    __metadata("design:type", Array)
], Earning.prototype, "gig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.earning),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'user earning' }),
    __metadata("design:type", user_entity_1.User)
], Earning.prototype, "user", void 0);
Earning = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Earning);
exports.Earning = Earning;
//# sourceMappingURL=earning.entity.js.map