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
exports.GigVideo = void 0;
const graphql_1 = require("@nestjs/graphql");
const file_entity_1 = require("../../files/entities/file.entity");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const typeorm_1 = require("typeorm");
let GigVideo = class GigVideo {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GigVideo.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigVideo.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], GigVideo.prototype, "selected", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'fileId', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigVideo.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigVideo.prototype, "gigId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gig_entity_1.Gig, (gig) => gig.gigVideo),
    (0, graphql_1.Field)(() => gig_entity_1.Gig, { description: 'gallery video' }),
    __metadata("design:type", gig_entity_1.Gig)
], GigVideo.prototype, "gig", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.File, (file) => file.gigVideo),
    (0, graphql_1.Field)(() => [file_entity_1.File], { description: 'gig video' }),
    __metadata("design:type", Array)
], GigVideo.prototype, "file", void 0);
GigVideo = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], GigVideo);
exports.GigVideo = GigVideo;
//# sourceMappingURL=gig-video.entity.js.map