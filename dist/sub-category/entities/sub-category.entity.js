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
exports.SubCategory = exports.categoryStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_entity_1 = require("../../categories/entities/category.entity");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const typeorm_1 = require("typeorm");
var categoryStatus;
(function (categoryStatus) {
    categoryStatus["DRAFT"] = "draft";
    categoryStatus["PAUSED"] = "paused";
    categoryStatus["ACTIVE"] = "active";
})(categoryStatus = exports.categoryStatus || (exports.categoryStatus = {}));
let SubCategory = class SubCategory {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SubCategory.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category description', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'subcategory status', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: categoryStatus,
        default: 'draft',
    }),
    __metadata("design:type", String)
], SubCategory.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SubCategory.prototype, "gigId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.subCategory, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => category_entity_1.Category, { description: 'subCategory', nullable: true }),
    __metadata("design:type", category_entity_1.Category)
], SubCategory.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_entity_1.Gig, (gig) => gig.subCategory),
    (0, graphql_1.Field)(() => [gig_entity_1.Gig], { description: 'gig', nullable: true }),
    __metadata("design:type", Array)
], SubCategory.prototype, "gig", void 0);
SubCategory = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], SubCategory);
exports.SubCategory = SubCategory;
//# sourceMappingURL=sub-category.entity.js.map