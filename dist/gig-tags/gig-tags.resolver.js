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
exports.GigTagsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_tags_service_1 = require("./gig-tags.service");
const gig_tag_entity_1 = require("./entities/gig-tag.entity");
const update_gig_tag_input_1 = require("./dto/update-gig-tag.input");
const create_gig_tag_input_1 = require("./dto/create-gig-tag.input");
let GigTagsResolver = class GigTagsResolver {
    constructor(gigTagsService) {
        this.gigTagsService = gigTagsService;
    }
    createGigTag(createGigTagInput) {
        return this.gigTagsService.create(createGigTagInput);
    }
    findAll() {
        return this.gigTagsService.findAll();
    }
    findOne(id) {
        return this.gigTagsService.findOne(id);
    }
    updateGigTag(updateGigTagInput) {
        return this.gigTagsService.update(updateGigTagInput.id, updateGigTagInput);
    }
    removeGigTag(id) {
        return this.gigTagsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => gig_tag_entity_1.GigTag),
    __param(0, (0, graphql_1.Args)('createGigTagInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gig_tag_input_1.CreateGigTagInput]),
    __metadata("design:returntype", void 0)
], GigTagsResolver.prototype, "createGigTag", null);
__decorate([
    (0, graphql_1.Query)(() => [gig_tag_entity_1.GigTag], { name: 'gigTags' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GigTagsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => gig_tag_entity_1.GigTag, { name: 'gigTag' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigTagsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_tag_entity_1.GigTag),
    __param(0, (0, graphql_1.Args)('updateGigTagInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_gig_tag_input_1.UpdateGigTagInput]),
    __metadata("design:returntype", void 0)
], GigTagsResolver.prototype, "updateGigTag", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_tag_entity_1.GigTag),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigTagsResolver.prototype, "removeGigTag", null);
GigTagsResolver = __decorate([
    (0, graphql_1.Resolver)(() => gig_tag_entity_1.GigTag),
    __metadata("design:paramtypes", [gig_tags_service_1.GigTagsService])
], GigTagsResolver);
exports.GigTagsResolver = GigTagsResolver;
//# sourceMappingURL=gig-tags.resolver.js.map