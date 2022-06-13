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
exports.HeadersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const headers_service_1 = require("./headers.service");
const header_entity_1 = require("./entities/header.entity");
const create_header_input_1 = require("./dto/create-header.input");
const update_header_input_1 = require("./dto/update-header.input");
let HeadersResolver = class HeadersResolver {
    constructor(headersService) {
        this.headersService = headersService;
    }
    createHeader(createHeaderInput) {
        return this.headersService.create(createHeaderInput);
    }
    findAll() {
        return this.headersService.findAll();
    }
    findOne(id) {
        return this.headersService.findOne(id);
    }
    updateHeader(updateHeaderInput) {
        return this.headersService.update(updateHeaderInput.id, updateHeaderInput);
    }
    removeHeader(id) {
        return this.headersService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => header_entity_1.Header),
    __param(0, (0, graphql_1.Args)('createHeaderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_header_input_1.CreateHeaderInput]),
    __metadata("design:returntype", void 0)
], HeadersResolver.prototype, "createHeader", null);
__decorate([
    (0, graphql_1.Query)(() => [header_entity_1.Header], { name: 'headers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeadersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => header_entity_1.Header, { name: 'header' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HeadersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => header_entity_1.Header),
    __param(0, (0, graphql_1.Args)('updateHeaderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_header_input_1.UpdateHeaderInput]),
    __metadata("design:returntype", void 0)
], HeadersResolver.prototype, "updateHeader", null);
__decorate([
    (0, graphql_1.Mutation)(() => header_entity_1.Header),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HeadersResolver.prototype, "removeHeader", null);
HeadersResolver = __decorate([
    (0, graphql_1.Resolver)(() => header_entity_1.Header),
    __metadata("design:paramtypes", [headers_service_1.HeadersService])
], HeadersResolver);
exports.HeadersResolver = HeadersResolver;
//# sourceMappingURL=headers.resolver.js.map