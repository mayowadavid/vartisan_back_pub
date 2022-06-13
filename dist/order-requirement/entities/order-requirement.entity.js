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
exports.OrderRequirement = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_entity_1 = require("../../order/entities/order.entity");
const file_entity_1 = require("../../files/entities/file.entity");
const typeorm_1 = require("typeorm");
let OrderRequirement = class OrderRequirement {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrderRequirement.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order description', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderRequirement.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'requirement creation date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderRequirement.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order reference', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderRequirement.prototype, "reference", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order color', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderRequirement.prototype, "color", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order requirement id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OrderRequirement.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.descriptionFile),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => file_entity_1.File, { description: 'order description file', nullable: true }),
    __metadata("design:type", file_entity_1.File)
], OrderRequirement.prototype, "descriptionFile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.referenceFile),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => file_entity_1.File, { description: 'order reference file', nullable: true }),
    __metadata("design:type", file_entity_1.File)
], OrderRequirement.prototype, "referenceFile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.colorFile),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => file_entity_1.File, { description: 'order color file', nullable: true }),
    __metadata("design:type", file_entity_1.File)
], OrderRequirement.prototype, "colorFile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_entity_1.Order, (order) => order.orderRequirement),
    (0, graphql_1.Field)(() => order_entity_1.Order, { description: 'order requirement', nullable: true }),
    __metadata("design:type", order_entity_1.Order)
], OrderRequirement.prototype, "order", void 0);
OrderRequirement = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], OrderRequirement);
exports.OrderRequirement = OrderRequirement;
//# sourceMappingURL=order-requirement.entity.js.map