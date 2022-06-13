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
exports.GigVideoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const gig_video_service_1 = require("./gig-video.service");
const gig_video_entity_1 = require("./entities/gig-video.entity");
const create_gig_video_input_1 = require("./dto/create-gig-video.input");
const update_gig_video_input_1 = require("./dto/update-gig-video.input");
let GigVideoResolver = class GigVideoResolver {
    constructor(gigVideoService) {
        this.gigVideoService = gigVideoService;
    }
    createGigVideo(createGigVideoInput) {
        return this.gigVideoService.create(createGigVideoInput);
    }
    findAll() {
        return this.gigVideoService.findAll();
    }
    findOne(id) {
        return this.gigVideoService.findOne(id);
    }
    updateGigVideo(updateGigVideoInput) {
        return this.gigVideoService.update(updateGigVideoInput.id, updateGigVideoInput);
    }
    removeGigVideo(id) {
        return this.gigVideoService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => gig_video_entity_1.GigVideo),
    __param(0, (0, graphql_1.Args)('createGigVideoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gig_video_input_1.CreateGigVideoInput]),
    __metadata("design:returntype", void 0)
], GigVideoResolver.prototype, "createGigVideo", null);
__decorate([
    (0, graphql_1.Query)(() => [gig_video_entity_1.GigVideo], { name: 'gigVideo' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GigVideoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => gig_video_entity_1.GigVideo, { name: 'gigVideo' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigVideoResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_video_entity_1.GigVideo),
    __param(0, (0, graphql_1.Args)('updateGigVideoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_gig_video_input_1.UpdateGigVideoInput]),
    __metadata("design:returntype", void 0)
], GigVideoResolver.prototype, "updateGigVideo", null);
__decorate([
    (0, graphql_1.Mutation)(() => gig_video_entity_1.GigVideo),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GigVideoResolver.prototype, "removeGigVideo", null);
GigVideoResolver = __decorate([
    (0, graphql_1.Resolver)(() => gig_video_entity_1.GigVideo),
    __metadata("design:paramtypes", [gig_video_service_1.GigVideoService])
], GigVideoResolver);
exports.GigVideoResolver = GigVideoResolver;
//# sourceMappingURL=gig-video.resolver.js.map