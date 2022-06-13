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
exports.FeaturedResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const featured_service_1 = require("./featured.service");
const featured_entity_1 = require("./entities/featured.entity");
const create_featured_input_1 = require("./dto/create-featured.input");
const update_featured_input_1 = require("./dto/update-featured.input");
let FeaturedResolver = class FeaturedResolver {
    constructor(featuredService) {
        this.featuredService = featuredService;
    }
    createFeatured(createFeaturedInput) {
        return this.featuredService.create(createFeaturedInput);
    }
    findAll() {
        return this.featuredService.findAll();
    }
    findOne(id) {
        return this.featuredService.findOne(id);
    }
    updateFeatured(updateFeaturedInput) {
        return this.featuredService.update(updateFeaturedInput.id, updateFeaturedInput);
    }
    removeFeatured(id) {
        return this.featuredService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => featured_entity_1.Featured),
    __param(0, (0, graphql_1.Args)('createFeaturedInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_featured_input_1.CreateFeaturedInput]),
    __metadata("design:returntype", void 0)
], FeaturedResolver.prototype, "createFeatured", null);
__decorate([
    (0, graphql_1.Query)(() => [featured_entity_1.Featured], { name: 'featured' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeaturedResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => featured_entity_1.Featured, { name: 'featured' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeaturedResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => featured_entity_1.Featured),
    __param(0, (0, graphql_1.Args)('updateFeaturedInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_featured_input_1.UpdateFeaturedInput]),
    __metadata("design:returntype", void 0)
], FeaturedResolver.prototype, "updateFeatured", null);
__decorate([
    (0, graphql_1.Mutation)(() => featured_entity_1.Featured),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeaturedResolver.prototype, "removeFeatured", null);
FeaturedResolver = __decorate([
    (0, graphql_1.Resolver)(() => featured_entity_1.Featured),
    __metadata("design:paramtypes", [featured_service_1.FeaturedService])
], FeaturedResolver);
exports.FeaturedResolver = FeaturedResolver;
//# sourceMappingURL=featured.resolver.js.map