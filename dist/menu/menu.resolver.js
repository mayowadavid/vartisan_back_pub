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
exports.MenuResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const menu_service_1 = require("./menu.service");
const menu_entity_1 = require("./entities/menu.entity");
const create_menu_input_1 = require("./dto/create-menu.input");
const update_menu_input_1 = require("./dto/update-menu.input");
let MenuResolver = class MenuResolver {
    constructor(menuService) {
        this.menuService = menuService;
    }
    createMenu(createMenuInput) {
        return this.menuService.create(createMenuInput);
    }
    findAll() {
        return this.menuService.findAll();
    }
    findOne(id) {
        return this.menuService.findOne(id);
    }
    updateMenu(updateMenuInput) {
        return this.menuService.update(updateMenuInput.id, updateMenuInput);
    }
    removeMenu(id) {
        return this.menuService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => menu_entity_1.Menu),
    __param(0, (0, graphql_1.Args)('createMenuInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_input_1.CreateMenuInput]),
    __metadata("design:returntype", void 0)
], MenuResolver.prototype, "createMenu", null);
__decorate([
    (0, graphql_1.Query)(() => [menu_entity_1.Menu], { name: 'menu' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => menu_entity_1.Menu, { name: 'menu' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_entity_1.Menu),
    __param(0, (0, graphql_1.Args)('updateMenuInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_menu_input_1.UpdateMenuInput]),
    __metadata("design:returntype", void 0)
], MenuResolver.prototype, "updateMenu", null);
__decorate([
    (0, graphql_1.Mutation)(() => menu_entity_1.Menu),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuResolver.prototype, "removeMenu", null);
MenuResolver = __decorate([
    (0, graphql_1.Resolver)(() => menu_entity_1.Menu),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuResolver);
exports.MenuResolver = MenuResolver;
//# sourceMappingURL=menu.resolver.js.map