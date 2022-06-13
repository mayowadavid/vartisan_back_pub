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
exports.Banner = void 0;
const graphql_1 = require("@nestjs/graphql");
const file_entity_1 = require("../../files/entities/file.entity");
const typeorm_1 = require("typeorm");
let Banner = class Banner {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Banner.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'file id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Banner.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerTitle', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Banner.prototype, "bannerTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerMiddleContent', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Banner.prototype, "bannerMiddleContent", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerDescription', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Banner.prototype, "bannerDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerFirstACtionTitle', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Banner.prototype, "bannerFirstActionTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerSecondACtionTitle', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Banner.prototype, "bannerSecondACtionTitle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.File, (file) => file.banner),
    (0, graphql_1.Field)(() => [file_entity_1.File], { description: 'bannerImage', nullable: true }),
    __metadata("design:type", Array)
], Banner.prototype, "file", void 0);
Banner = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Banner);
exports.Banner = Banner;
//# sourceMappingURL=banner.entity.js.map