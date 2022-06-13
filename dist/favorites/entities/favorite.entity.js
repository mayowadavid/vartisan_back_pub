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
exports.Favorite = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Favorite = class Favorite {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Favorite.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'name of gigs' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Favorite.prototype, "gigs", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig id' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Favorite.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user id' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Favorite.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gig_entity_1.Gig, (gig) => gig.favorite),
    (0, graphql_1.Field)(() => gig_entity_1.Gig, { description: 'Gig favorite' }),
    __metadata("design:type", gig_entity_1.Gig)
], Favorite.prototype, "gig", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.favorite),
    (0, graphql_1.Field)(() => user_entity_1.User, { description: 'user favorite' }),
    __metadata("design:type", user_entity_1.User)
], Favorite.prototype, "user", void 0);
Favorite = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Favorite);
exports.Favorite = Favorite;
//# sourceMappingURL=favorite.entity.js.map