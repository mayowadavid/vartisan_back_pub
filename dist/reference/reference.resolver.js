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
exports.ReferenceResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reference_service_1 = require("./reference.service");
const reference_entity_1 = require("./entities/reference.entity");
const create_reference_input_1 = require("./dto/create-reference.input");
const update_reference_input_1 = require("./dto/update-reference.input");
const common_1 = require("@nestjs/common");
const gql_users_guard_1 = require("../users/gql-users.guard");
const current_user_1 = require("../users/current-user");
let ReferenceResolver = class ReferenceResolver {
    constructor(referenceService) {
        this.referenceService = referenceService;
    }
    createReference(createReferenceInput) {
        return this.referenceService.create(createReferenceInput);
    }
    findAll() {
        return this.referenceService.findAll();
    }
    findReferenceByUser(user) {
        return this.referenceService.findReferenceByUser(user);
    }
    findOne(id) {
        return this.referenceService.findOne(id);
    }
    updateReference(updateReferenceInput) {
        return this.referenceService.update(updateReferenceInput.id, updateReferenceInput);
    }
    removeReference(id) {
        return this.referenceService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => reference_entity_1.Reference),
    __param(0, (0, graphql_1.Args)('createReferenceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reference_input_1.CreateReferenceInput]),
    __metadata("design:returntype", void 0)
], ReferenceResolver.prototype, "createReference", null);
__decorate([
    (0, graphql_1.Query)(() => [reference_entity_1.Reference], { name: 'getAllreference' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReferenceResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => [reference_entity_1.Reference], { name: 'findReferenceByUser' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReferenceResolver.prototype, "findReferenceByUser", null);
__decorate([
    (0, graphql_1.Query)(() => reference_entity_1.Reference, { name: 'findOnereference' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReferenceResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => reference_entity_1.Reference),
    __param(0, (0, graphql_1.Args)('updateReferenceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_reference_input_1.UpdateReferenceInput]),
    __metadata("design:returntype", void 0)
], ReferenceResolver.prototype, "updateReference", null);
__decorate([
    (0, graphql_1.Mutation)(() => reference_entity_1.Reference),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReferenceResolver.prototype, "removeReference", null);
ReferenceResolver = __decorate([
    (0, graphql_1.Resolver)(() => reference_entity_1.Reference),
    __metadata("design:paramtypes", [reference_service_1.ReferenceService])
], ReferenceResolver);
exports.ReferenceResolver = ReferenceResolver;
//# sourceMappingURL=reference.resolver.js.map