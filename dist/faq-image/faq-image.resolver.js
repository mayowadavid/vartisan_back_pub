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
exports.FaqImageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const faq_image_service_1 = require("./faq-image.service");
const faq_image_entity_1 = require("./entities/faq-image.entity");
const create_faq_image_input_1 = require("./dto/create-faq-image.input");
const update_faq_image_input_1 = require("./dto/update-faq-image.input");
let FaqImageResolver = class FaqImageResolver {
    constructor(faqImageService) {
        this.faqImageService = faqImageService;
    }
    createFaqImage(createFaqImageInput) {
        return this.faqImageService.create(createFaqImageInput);
    }
    findAll() {
        return this.faqImageService.findAll();
    }
    findOne(id) {
        return this.faqImageService.findOne(id);
    }
    updateFaqImage(updateFaqImageInput) {
        return this.faqImageService.update(updateFaqImageInput.id, updateFaqImageInput);
    }
    removeFaqImage(id) {
        return this.faqImageService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => faq_image_entity_1.FaqImage),
    __param(0, (0, graphql_1.Args)('createFaqImageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faq_image_input_1.CreateFaqImageInput]),
    __metadata("design:returntype", void 0)
], FaqImageResolver.prototype, "createFaqImage", null);
__decorate([
    (0, graphql_1.Query)(() => [faq_image_entity_1.FaqImage], { name: 'faqImage' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FaqImageResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => faq_image_entity_1.FaqImage, { name: 'faqImage' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FaqImageResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => faq_image_entity_1.FaqImage),
    __param(0, (0, graphql_1.Args)('updateFaqImageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_faq_image_input_1.UpdateFaqImageInput]),
    __metadata("design:returntype", void 0)
], FaqImageResolver.prototype, "updateFaqImage", null);
__decorate([
    (0, graphql_1.Mutation)(() => faq_image_entity_1.FaqImage),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FaqImageResolver.prototype, "removeFaqImage", null);
FaqImageResolver = __decorate([
    (0, graphql_1.Resolver)(() => faq_image_entity_1.FaqImage),
    __metadata("design:paramtypes", [faq_image_service_1.FaqImageService])
], FaqImageResolver);
exports.FaqImageResolver = FaqImageResolver;
//# sourceMappingURL=faq-image.resolver.js.map