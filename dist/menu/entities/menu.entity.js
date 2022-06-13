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
exports.Menu = void 0;
const graphql_1 = require("@nestjs/graphql");
const header_entity_1 = require("../../headers/entities/header.entity");
const submenu_entity_1 = require("../../submenu/entities/submenu.entity");
const typeorm_1 = require("typeorm");
let Menu = class Menu {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Menu.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu name', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Menu.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu url', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Menu.prototype, "menuUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => header_entity_1.Header, (header) => header.menu),
    (0, graphql_1.Field)(() => header_entity_1.Header),
    __metadata("design:type", header_entity_1.Header)
], Menu.prototype, "header", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'header id', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Menu.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => submenu_entity_1.Submenu, (submenu) => submenu.menu),
    (0, graphql_1.Field)(() => [submenu_entity_1.Submenu]),
    __metadata("design:type", Array)
], Menu.prototype, "submenu", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'subMenu id', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Menu.prototype, "subMenuId", void 0);
Menu = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.entity.js.map