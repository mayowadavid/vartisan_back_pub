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
exports.GigFaq = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const typeorm_1 = require("typeorm");
let GigFaq = class GigFaq {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GigFaq.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq name', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigFaq.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq description', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigFaq.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig faq id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GigFaq.prototype, "gigId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gig_entity_1.Gig, (gig) => gig.gigFaq),
    (0, graphql_1.Field)(() => gig_entity_1.Gig, { description: 'Gig faq' }),
    __metadata("design:type", gig_entity_1.Gig)
], GigFaq.prototype, "gig", void 0);
GigFaq = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], GigFaq);
exports.GigFaq = GigFaq;
//# sourceMappingURL=gig-faq.entity.js.map