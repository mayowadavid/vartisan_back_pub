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
exports.CommercialUseResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const commercial_use_service_1 = require("./commercial-use.service");
const commercial_use_entity_1 = require("./entities/commercial-use.entity");
const create_commercial_use_input_1 = require("./dto/create-commercial-use.input");
const update_commercial_use_input_1 = require("./dto/update-commercial-use.input");
let CommercialUseResolver = class CommercialUseResolver {
    constructor(commercialUseService) {
        this.commercialUseService = commercialUseService;
    }
    createCommercialUse(createCommercialUseInput) {
        return this.commercialUseService.create(createCommercialUseInput);
    }
    findAll() {
        return this.commercialUseService.findAll();
    }
    findOne(id) {
        return this.commercialUseService.findOne(id);
    }
    updateCommercialUse(updateCommercialUseInput) {
        return this.commercialUseService.update(updateCommercialUseInput.id, updateCommercialUseInput);
    }
    removeCommercialUse(id) {
        return this.commercialUseService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => commercial_use_entity_1.CommercialUse),
    __param(0, (0, graphql_1.Args)('createCommercialUseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_commercial_use_input_1.CreateCommercialUseInput]),
    __metadata("design:returntype", void 0)
], CommercialUseResolver.prototype, "createCommercialUse", null);
__decorate([
    (0, graphql_1.Query)(() => [commercial_use_entity_1.CommercialUse], { name: 'commercialUse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommercialUseResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => commercial_use_entity_1.CommercialUse, { name: 'commercialUse' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommercialUseResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => commercial_use_entity_1.CommercialUse),
    __param(0, (0, graphql_1.Args)('updateCommercialUseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_commercial_use_input_1.UpdateCommercialUseInput]),
    __metadata("design:returntype", void 0)
], CommercialUseResolver.prototype, "updateCommercialUse", null);
__decorate([
    (0, graphql_1.Mutation)(() => commercial_use_entity_1.CommercialUse),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommercialUseResolver.prototype, "removeCommercialUse", null);
CommercialUseResolver = __decorate([
    (0, graphql_1.Resolver)(() => commercial_use_entity_1.CommercialUse),
    __metadata("design:paramtypes", [commercial_use_service_1.CommercialUseService])
], CommercialUseResolver);
exports.CommercialUseResolver = CommercialUseResolver;
//# sourceMappingURL=commercial-use.resolver.js.map