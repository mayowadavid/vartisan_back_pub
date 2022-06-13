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
exports.Submenu = void 0;
const graphql_1 = require("@nestjs/graphql");
const menu_entity_1 = require("../../menu/entities/menu.entity");
const typeorm_1 = require("typeorm");
let Submenu = class Submenu {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Submenu.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu name', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Submenu.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu url', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Submenu.prototype, "menuUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu id', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Submenu.prototype, "menuId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => menu_entity_1.Menu, (menu) => menu.submenu),
    (0, graphql_1.Field)(() => menu_entity_1.Menu, { nullable: true }),
    __metadata("design:type", menu_entity_1.Menu)
], Submenu.prototype, "menu", void 0);
Submenu = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Submenu);
exports.Submenu = Submenu;
//# sourceMappingURL=submenu.entity.js.map