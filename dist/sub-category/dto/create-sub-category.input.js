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
exports.CreateSubCategoryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const sub_category_entity_1 = require("../entities/sub-category.entity");
let CreateSubCategoryInput = class CreateSubCategoryInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'category name', nullable: true }),
    __metadata("design:type", String)
], CreateSubCategoryInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category description', nullable: true }),
    __metadata("design:type", String)
], CreateSubCategoryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category status', nullable: true }),
    __metadata("design:type", String)
], CreateSubCategoryInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig id', nullable: true }),
    __metadata("design:type", String)
], CreateSubCategoryInput.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'category id', nullable: true }),
    __metadata("design:type", String)
], CreateSubCategoryInput.prototype, "categoryId", void 0);
CreateSubCategoryInput = __decorate([
    (0, graphql_1.InputType)()
], CreateSubCategoryInput);
exports.CreateSubCategoryInput = CreateSubCategoryInput;
//# sourceMappingURL=create-sub-category.input.js.map