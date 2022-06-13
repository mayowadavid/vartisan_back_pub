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
exports.HomeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const home_service_1 = require("./home.service");
const home_entity_1 = require("./entities/home.entity");
const create_home_input_1 = require("./dto/create-home.input");
const update_home_input_1 = require("./dto/update-home.input");
let HomeResolver = class HomeResolver {
    constructor(homeService) {
        this.homeService = homeService;
    }
    createHome(createHomeInput) {
        return this.homeService.create(createHomeInput);
    }
    findAll() {
        return this.homeService.findAll();
    }
    findOne(id) {
        return this.homeService.findOne(id);
    }
    updateHome(updateHomeInput) {
        return this.homeService.update(updateHomeInput.id, updateHomeInput);
    }
    removeHome(id) {
        return this.homeService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => home_entity_1.Home),
    __param(0, (0, graphql_1.Args)('createHomeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_home_input_1.CreateHomeInput]),
    __metadata("design:returntype", void 0)
], HomeResolver.prototype, "createHome", null);
__decorate([
    (0, graphql_1.Query)(() => [home_entity_1.Home], { name: 'home' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => home_entity_1.Home, { name: 'home' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => home_entity_1.Home),
    __param(0, (0, graphql_1.Args)('updateHomeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_home_input_1.UpdateHomeInput]),
    __metadata("design:returntype", void 0)
], HomeResolver.prototype, "updateHome", null);
__decorate([
    (0, graphql_1.Mutation)(() => home_entity_1.Home),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HomeResolver.prototype, "removeHome", null);
HomeResolver = __decorate([
    (0, graphql_1.Resolver)(() => home_entity_1.Home),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeResolver);
exports.HomeResolver = HomeResolver;
//# sourceMappingURL=home.resolver.js.map