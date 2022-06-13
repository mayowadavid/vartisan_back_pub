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
exports.GigRequirement = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const gig_entity_1 = require("../../gig/entities/gig.entity");
let GigRequirement = class GigRequirement {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GigRequirement.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'requirement name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigRequirement.prototype, "requirementName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'requirement creation date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigRequirement.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'required faq', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], GigRequirement.prototype, "required", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq text', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], GigRequirement.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq link url', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], GigRequirement.prototype, "link", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq gig id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigRequirement.prototype, "gigId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gig_entity_1.Gig, (gig) => gig.gigFaq),
    (0, graphql_1.Field)(() => gig_entity_1.Gig, { description: 'Gig favorite' }),
    __metadata("design:type", gig_entity_1.Gig)
], GigRequirement.prototype, "gig", void 0);
GigRequirement = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], GigRequirement);
exports.GigRequirement = GigRequirement;
//# sourceMappingURL=gig-requirement.entity.js.map