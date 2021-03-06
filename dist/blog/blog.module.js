"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModule = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
const blog_resolver_1 = require("./blog.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const blog_entity_1 = require("./entities/blog.entity");
const blog_controller_1 = require("./blog.controller");
const files_service_1 = require("../files/files.service");
const file_entity_1 = require("../files/entities/file.entity");
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([blog_entity_1.Blog, file_entity_1.File])],
        providers: [blog_resolver_1.BlogResolver, blog_service_1.BlogService, files_service_1.FilesService],
        controllers: [blog_controller_1.BlogController],
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map