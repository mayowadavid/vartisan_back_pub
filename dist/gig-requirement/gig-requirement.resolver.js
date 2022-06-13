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
exports.GigRequirementResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_requirement_service_1 = require("./gig-requirement.service");
const gig_requirement_entity_1 = require("./entities/gig-requirement.entity");
const create_gig_requirement_input_1 = require("./dto/create-gig-requirement.input");
const update_gig_requirement_input_1 = require("./dto/update-gig-requirement.input");
let GigRequirementResolver = class GigRequirementResolver {
    constructor(gigRequirementService) {
        this.gigRequirementService = gigRequirementService;
    }
    createGigRequirement(createGigRequirementInput) {
        return this.gigRequirementService.create(createGigRequirementInput);
    }
    findAll() {
        return this.gigRequirementService.findAll();
    }
    findOne(id) {
        return this.gigRequirementService.findOne(id);
    }
    updateGigRequirement(updateGigRequirementInput) {
        return this.gigRequirementService.update(updateGigRequirementInput.id, updateGigRequirementInput);
    }
    removeGigRequirement(id) {
        return this.gigRequirementService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => gig_requirement_entity_1.GigRequirement),
    __param(0, (0, graphql_1.Args)('createGigRequirementInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gig_requirement_input_1.CreateGigRequirementInput]),
    __metadata("design:returntype", void 0)
], GigRequirementResolver.prototype, "createGigRequirement", null);
__decorate([
    (0, graphql_1.Query)(() => [gig_requirement_entity_1.GigRequirement], { name: 'gigRequirement' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GigRequirementResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => gig_requirement_entity_1.GigRequirement, { name: 'gigRequirement' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigRequirementResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_requirement_entity_1.GigRequirement),
    __param(0, (0, graphql_1.Args)('updateGigRequirementInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_gig_requirement_input_1.UpdateGigRequirementInput]),
    __metadata("design:returntype", void 0)
], GigRequirementResolver.prototype, "updateGigRequirement", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_requirement_entity_1.GigRequirement),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigRequirementResolver.prototype, "removeGigRequirement", null);
GigRequirementResolver = __decorate([
    (0, graphql_1.Resolver)(() => gig_requirement_entity_1.GigRequirement),
    __metadata("design:paramtypes", [gig_requirement_service_1.GigRequirementService])
], GigRequirementResolver);
exports.GigRequirementResolver = GigRequirementResolver;
//# sourceMappingURL=gig-requirement.resolver.js.map