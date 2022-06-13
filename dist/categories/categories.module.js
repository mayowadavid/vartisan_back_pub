"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesModule = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const categories_resolver_1 = require("./categories.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entities/category.entity");
const categories_controller_1 = require("./categories.controller");
const file_entity_1 = require("../files/entities/file.entity");
const files_service_1 = require("../files/files.service");
const sub_category_entity_1 = require("../sub-category/entities/sub-category.entity");
const sub_category_service_1 = require("../sub-category/sub-category.service");
let CategoriesModule = class CategoriesModule {
};
CategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category, file_entity_1.File, sub_category_entity_1.SubCategory])],
        providers: [
            categories_resolver_1.CategoriesResolver,
            categories_service_1.CategoriesService,
            files_service_1.FilesService,
            sub_category_service_1.SubCategoryService,
        ],
        controllers: [categories_controller_1.CategoriesController],
    })
], CategoriesModule);
exports.CategoriesModule = CategoriesModule;
//# sourceMappingURL=categories.module.js.map