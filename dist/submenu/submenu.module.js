"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmenuModule = void 0;
const common_1 = require("@nestjs/common");
const submenu_service_1 = require("./submenu.service");
const submenu_resolver_1 = require("./submenu.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const submenu_entity_1 = require("./entities/submenu.entity");
let SubmenuModule = class SubmenuModule {
};
SubmenuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([submenu_entity_1.Submenu])],
        providers: [submenu_resolver_1.SubmenuResolver, submenu_service_1.SubmenuService],
    })
], SubmenuModule);
exports.SubmenuModule = SubmenuModule;
//# sourceMappingURL=submenu.module.js.map