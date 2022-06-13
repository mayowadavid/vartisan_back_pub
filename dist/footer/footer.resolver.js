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
exports.FooterResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const footer_service_1 = require("./footer.service");
const footer_entity_1 = require("./entities/footer.entity");
const create_footer_input_1 = require("./dto/create-footer.input");
const update_footer_input_1 = require("./dto/update-footer.input");
let FooterResolver = class FooterResolver {
    constructor(footerService) {
        this.footerService = footerService;
    }
    createFooter(createFooterInput) {
        return this.footerService.create(createFooterInput);
    }
    findAll() {
        return this.footerService.findAll();
    }
    findOne(id) {
        return this.footerService.findOne(id);
    }
    updateFooter(updateFooterInput) {
        return this.footerService.update(updateFooterInput.id, updateFooterInput);
    }
    removeFooter(id) {
        return this.footerService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => footer_entity_1.Footer),
    __param(0, (0, graphql_1.Args)('createFooterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_footer_input_1.CreateFooterInput]),
    __metadata("design:returntype", void 0)
], FooterResolver.prototype, "createFooter", null);
__decorate([
    (0, graphql_1.Query)(() => [footer_entity_1.Footer], { name: 'footer' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FooterResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => footer_entity_1.Footer, { name: 'footer' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FooterResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => footer_entity_1.Footer),
    __param(0, (0, graphql_1.Args)('updateFooterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_footer_input_1.UpdateFooterInput]),
    __metadata("design:returntype", void 0)
], FooterResolver.prototype, "updateFooter", null);
__decorate([
    (0, graphql_1.Mutation)(() => footer_entity_1.Footer),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FooterResolver.prototype, "removeFooter", null);
FooterResolver = __decorate([
    (0, graphql_1.Resolver)(() => footer_entity_1.Footer),
    __metadata("design:paramtypes", [footer_service_1.FooterService])
], FooterResolver);
exports.FooterResolver = FooterResolver;
//# sourceMappingURL=footer.resolver.js.map