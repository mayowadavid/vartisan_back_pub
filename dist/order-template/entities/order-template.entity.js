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
exports.OrderTemplate = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let OrderTemplate = class OrderTemplate {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrderTemplate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user message' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderTemplate.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'date' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderTemplate.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'revision' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderTemplate.prototype, "revision", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order status' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderTemplate.prototype, "orderStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order amount' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderTemplate.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order count' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderTemplate.prototype, "orderCount", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order source file' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], OrderTemplate.prototype, "sourceFile", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'commercial order' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], OrderTemplate.prototype, "commercial", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'rush order' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], OrderTemplate.prototype, "rushOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order end' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderTemplate.prototype, "end", void 0);
OrderTemplate = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], OrderTemplate);
exports.OrderTemplate = OrderTemplate;
//# sourceMappingURL=order-template.entity.js.map