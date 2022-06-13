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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GigResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_service_1 = require("./gig.service");
const gig_entity_1 = require("./entities/gig.entity");
const create_gig_input_1 = require("./dto/create-gig.input");
const update_gig_input_1 = require("./dto/update-gig.input");
const gql_users_guard_1 = require("../users/gql-users.guard");
const common_1 = require("@nestjs/common");
const current_user_1 = require("../users/current-user");
let GigResolver = class GigResolver {
    constructor(gigService) {
        this.gigService = gigService;
    }
    createGig(user, createGigInput) {
        return this.gigService.create(user, createGigInput);
    }
    findAll() {
        return this.gigService.findAll();
    }
    findOne(id) {
        return this.gigService.findOne(id);
    }
    findGigByUser(userGigInput) {
        return this.gigService.findGigByUser(userGigInput.name, userGigInput.userName);
    }
    findAllUserGig(user) {
        return this.gigService.findAllUserGig(user);
    }
    updateGig(updateGigInput) {
        return this.gigService.update(updateGigInput.id, updateGigInput);
    }
    removeGig(id) {
        return this.gigService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => gig_entity_1.Gig, { name: 'creategig' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createGigInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_gig_input_1.CreateGigInput]),
    __metadata("design:returntype", void 0)
], GigResolver.prototype, "createGig", null);
__decorate([
    (0, graphql_1.Query)(() => [gig_entity_1.Gig], { name: 'getAllgig' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GigResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => gig_entity_1.Gig, { name: 'gig' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => gig_entity_1.Gig, { name: 'findGigByUser' }),
    __param(0, (0, graphql_1.Args)('userGig')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gig_input_1.UserGigInput]),
    __metadata("design:returntype", void 0)
], GigResolver.prototype, "findGigByUser", null);
__decorate([
    (0, graphql_1.Query)(() => [gig_entity_1.Gig], { name: 'findAllUserGig' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GigResolver.prototype, "findAllUserGig", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_entity_1.Gig),
    __param(0, (0, graphql_1.Args)('updateGigInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_gig_input_1.UpdateGigInput]),
    __metadata("design:returntype", void 0)
], GigResolver.prototype, "updateGig", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_entity_1.Gig),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigResolver.prototype, "removeGig", null);
GigResolver = __decorate([
    (0, graphql_1.Resolver)(() => gig_entity_1.Gig),
    __metadata("design:paramtypes", [gig_service_1.GigService])
], GigResolver);
exports.GigResolver = GigResolver;
//# sourceMappingURL=gig.resolver.js.map