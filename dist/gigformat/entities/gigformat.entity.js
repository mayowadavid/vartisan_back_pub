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
exports.Gigformat = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const typeorm_1 = require("typeorm");
let Gigformat = class Gigformat {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Gigformat.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'ai format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "ai", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'psd format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "psd", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'swf format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "swf", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gif format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "gif", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blend format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "blend", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bmpr format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "bmpr", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'eps format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "eps", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'jpg format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "jpg", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'fig format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "fig", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'ico format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "ico", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'png format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "png", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'other format name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Gigformat.prototype, "other", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => gig_entity_1.Gig, (gig) => gig.gigFormat),
    (0, graphql_1.Field)(() => gig_entity_1.Gig, { description: 'gig format', nullable: true }),
    __metadata("design:type", gig_entity_1.Gig)
], Gigformat.prototype, "gig", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Gigformat.prototype, "gigId", void 0);
Gigformat = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Gigformat);
exports.Gigformat = Gigformat;
//# sourceMappingURL=gigformat.entity.js.map