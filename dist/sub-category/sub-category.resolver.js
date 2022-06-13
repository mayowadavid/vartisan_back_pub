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
exports.SubCategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const sub_category_service_1 = require("./sub-category.service");
const sub_category_entity_1 = require("./entities/sub-category.entity");
const create_sub_category_input_1 = require("./dto/create-sub-category.input");
const update_sub_category_input_1 = require("./dto/update-sub-category.input");
let SubCategoryResolver = class SubCategoryResolver {
    constructor(subCategoryService) {
        this.subCategoryService = subCategoryService;
    }
    createSubCategory(createSubCategoryInput) {
        return this.subCategoryService.create(createSubCategoryInput);
    }
    findAll() {
        return this.subCategoryService.findAll();
    }
    findOne(id) {
        return this.subCategoryService.findOne(id);
    }
    updateSubCategory(updateSubCategoryInput) {
        return this.subCategoryService.update(updateSubCategoryInput.id, updateSubCategoryInput);
    }
    removeSubCategory(id) {
        return this.subCategoryService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => sub_category_entity_1.SubCategory),
    __param(0, (0, graphql_1.Args)('createSubCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sub_category_input_1.CreateSubCategoryInput]),
    __metadata("design:returntype", void 0)
], SubCategoryResolver.prototype, "createSubCategory", null);
__decorate([
    (0, graphql_1.Query)(() => [sub_category_entity_1.SubCategory], { name: 'getAllSubCategory' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubCategoryResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => sub_category_entity_1.SubCategory, { name: 'subCategory' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubCategoryResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => sub_category_entity_1.SubCategory),
    __param(0, (0, graphql_1.Args)('updateSubCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_sub_category_input_1.UpdateSubCategoryInput]),
    __metadata("design:returntype", void 0)
], SubCategoryResolver.prototype, "updateSubCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => sub_category_entity_1.SubCategory),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubCategoryResolver.prototype, "removeSubCategory", null);
SubCategoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => sub_category_entity_1.SubCategory),
    __metadata("design:paramtypes", [sub_category_service_1.SubCategoryService])
], SubCategoryResolver);
exports.SubCategoryResolver = SubCategoryResolver;
//# sourceMappingURL=sub-category.resolver.js.map