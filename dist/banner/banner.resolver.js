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
exports.BannerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const banner_service_1 = require("./banner.service");
const banner_entity_1 = require("./entities/banner.entity");
const create_banner_input_1 = require("./dto/create-banner.input");
const update_banner_input_1 = require("./dto/update-banner.input");
let BannerResolver = class BannerResolver {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    createBanner(createBannerInput) {
        return this.bannerService.create(createBannerInput);
    }
    findAll() {
        return this.bannerService.findAll();
    }
    findOne(id) {
        return this.bannerService.findOne(id);
    }
    updateBanner(updateBannerInput) {
        return this.bannerService.update(updateBannerInput.id, updateBannerInput);
    }
    removeBanner(id) {
        return this.bannerService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => banner_entity_1.Banner),
    __param(0, (0, graphql_1.Args)('createBannerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_banner_input_1.CreateBannerInput]),
    __metadata("design:returntype", void 0)
], BannerResolver.prototype, "createBanner", null);
__decorate([
    (0, graphql_1.Query)(() => [banner_entity_1.Banner], { name: 'findAllbanner' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BannerResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => banner_entity_1.Banner, { name: 'findbanner' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannerResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => banner_entity_1.Banner),
    __param(0, (0, graphql_1.Args)('updateBannerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_banner_input_1.UpdateBannerInput]),
    __metadata("design:returntype", void 0)
], BannerResolver.prototype, "updateBanner", null);
__decorate([
    (0, graphql_1.Mutation)(() => banner_entity_1.Banner),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BannerResolver.prototype, "removeBanner", null);
BannerResolver = __decorate([
    (0, graphql_1.Resolver)(() => banner_entity_1.Banner),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerResolver);
exports.BannerResolver = BannerResolver;
//# sourceMappingURL=banner.resolver.js.map