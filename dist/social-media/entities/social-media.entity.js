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
exports.SocialMedia = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let SocialMedia = class SocialMedia {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SocialMedia.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'social name' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SocialMedia.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'social title' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SocialMedia.prototype, "title", void 0);
SocialMedia = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], SocialMedia);
exports.SocialMedia = SocialMedia;
//# sourceMappingURL=social-media.entity.js.map