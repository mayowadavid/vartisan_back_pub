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
exports.Reference = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const file_entity_1 = require("../../files/entities/file.entity");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Reference = class Reference {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Reference.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'reference name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Reference.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'reference description', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Reference.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'reference default', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Reference.prototype, "selected", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'reference id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Reference.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig reference id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Reference.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig reference id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Reference.prototype, "gigReferenceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.reference),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'user Reference', nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Reference.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, (file) => file.clientReference),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => file_entity_1.File, { description: 'Client Reference', nullable: true }),
    __metadata("design:type", file_entity_1.File)
], Reference.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gig_entity_1.Gig, (gigReference) => gigReference.referenceGig),
    (0, graphql_1.Field)(() => gig_entity_1.Gig, { description: 'gig format', nullable: true }),
    __metadata("design:type", gig_entity_1.Gig)
], Reference.prototype, "gigReference", void 0);
Reference = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Reference);
exports.Reference = Reference;
//# sourceMappingURL=reference.entity.js.map