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
exports.Header = void 0;
const graphql_1 = require("@nestjs/graphql");
const menu_entity_1 = require("../../menu/entities/menu.entity");
const typeorm_1 = require("typeorm");
let Header = class Header {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Header.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headers name', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Header.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headers menu', nullable: false }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Header.prototype, "headerMenu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.Menu, (menu) => menu.header),
    (0, graphql_1.Field)(() => [menu_entity_1.Menu]),
    __metadata("design:type", Array)
], Header.prototype, "menu", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Header.prototype, "menuId", void 0);
Header = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Header);
exports.Header = Header;
//# sourceMappingURL=header.entity.js.map