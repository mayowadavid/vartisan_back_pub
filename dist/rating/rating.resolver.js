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
exports.RatingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const rating_service_1 = require("./rating.service");
const rating_entity_1 = require("./entities/rating.entity");
const create_rating_input_1 = require("./dto/create-rating.input");
const update_rating_input_1 = require("./dto/update-rating.input");
let RatingResolver = class RatingResolver {
    constructor(ratingService) {
        this.ratingService = ratingService;
    }
    createRating(createRatingInput) {
        return this.ratingService.create(createRatingInput);
    }
    findAll() {
        return this.ratingService.findAll();
    }
    findOne(id) {
        return this.ratingService.findOne(id);
    }
    updateRating(updateRatingInput) {
        return this.ratingService.update(updateRatingInput.id, updateRatingInput);
    }
    removeRating(id) {
        return this.ratingService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => rating_entity_1.Rating),
    __param(0, (0, graphql_1.Args)('createRatingInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rating_input_1.CreateRatingInput]),
    __metadata("design:returntype", void 0)
], RatingResolver.prototype, "createRating", null);
__decorate([
    (0, graphql_1.Query)(() => [rating_entity_1.Rating], { name: 'rating' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RatingResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => rating_entity_1.Rating, { name: 'rating' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RatingResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => rating_entity_1.Rating),
    __param(0, (0, graphql_1.Args)('updateRatingInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_rating_input_1.UpdateRatingInput]),
    __metadata("design:returntype", void 0)
], RatingResolver.prototype, "updateRating", null);
__decorate([
    (0, graphql_1.Mutation)(() => rating_entity_1.Rating),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RatingResolver.prototype, "removeRating", null);
RatingResolver = __decorate([
    (0, graphql_1.Resolver)(() => rating_entity_1.Rating),
    __metadata("design:paramtypes", [rating_service_1.RatingService])
], RatingResolver);
exports.RatingResolver = RatingResolver;
//# sourceMappingURL=rating.resolver.js.map