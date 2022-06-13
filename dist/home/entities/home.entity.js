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
exports.Home = void 0;
const graphql_1 = require("@nestjs/graphql");
const header_entity_1 = require("../../headers/entities/header.entity");
const typeorm_1 = require("typeorm");
let Home = class Home {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Home.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'site name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Home.prototype, "siteName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'logo', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Home.prototype, "logoUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display Category', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Home.prototype, "showCategory", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display featured category', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Home.prototype, "showFeatured", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display latest delivery', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Home.prototype, "showLatest", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display site process', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Home.prototype, "showProcess", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display site faq', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Home.prototype, "showFaq", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display site optin', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Home.prototype, "showOptin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => header_entity_1.Header, (header) => header.menu),
    (0, graphql_1.Field)(() => header_entity_1.Header, { nullable: true }),
    __metadata("design:type", header_entity_1.Header)
], Home.prototype, "header", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headerId', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Home.prototype, "headerId", void 0);
Home = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Home);
exports.Home = Home;
//# sourceMappingURL=home.entity.js.map