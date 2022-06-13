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
exports.GigFaqResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_faq_service_1 = require("./gig-faq.service");
const gig_faq_entity_1 = require("./entities/gig-faq.entity");
const create_gig_faq_input_1 = require("./dto/create-gig-faq.input");
const update_gig_faq_input_1 = require("./dto/update-gig-faq.input");
let GigFaqResolver = class GigFaqResolver {
    constructor(gigFaqService) {
        this.gigFaqService = gigFaqService;
    }
    createGigFaq(createGigFaqInput) {
        return this.gigFaqService.create(createGigFaqInput);
    }
    findAll() {
        return this.gigFaqService.findAll();
    }
    findOne(id) {
        return this.gigFaqService.findOne(id);
    }
    updateGigFaq(updateGigFaqInput) {
        return this.gigFaqService.update(updateGigFaqInput.id, updateGigFaqInput);
    }
    removeGigFaq(id) {
        return this.gigFaqService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => gig_faq_entity_1.GigFaq),
    __param(0, (0, graphql_1.Args)('createGigFaqInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gig_faq_input_1.CreateGigFaqInput]),
    __metadata("design:returntype", void 0)
], GigFaqResolver.prototype, "createGigFaq", null);
__decorate([
    (0, graphql_1.Query)(() => [gig_faq_entity_1.GigFaq], { name: 'gigFaq' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GigFaqResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => gig_faq_entity_1.GigFaq, { name: 'gigFaq' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigFaqResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_faq_entity_1.GigFaq),
    __param(0, (0, graphql_1.Args)('updateGigFaqInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_gig_faq_input_1.UpdateGigFaqInput]),
    __metadata("design:returntype", void 0)
], GigFaqResolver.prototype, "updateGigFaq", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_faq_entity_1.GigFaq),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigFaqResolver.prototype, "removeGigFaq", null);
GigFaqResolver = __decorate([
    (0, graphql_1.Resolver)(() => gig_faq_entity_1.GigFaq),
    __metadata("design:paramtypes", [gig_faq_service_1.GigFaqService])
], GigFaqResolver);
exports.GigFaqResolver = GigFaqResolver;
//# sourceMappingURL=gig-faq.resolver.js.map