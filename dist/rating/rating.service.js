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
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const rating_entity_1 = require("./entities/rating.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RatingService = class RatingService {
    constructor(ratingRepository) {
        this.ratingRepository = ratingRepository;
    }
    create(createRatingInput) {
        const rating = this.ratingRepository.create(createRatingInput);
        return this.ratingRepository.save(rating);
    }
    findAll() {
        return this.ratingRepository.find({
            relations: ['gig'],
        });
    }
    findOne(id) {
        return this.ratingRepository.findOne(id, {
            relations: ['gig'],
        });
    }
    update(id, updateRatingInput) {
        const rating = this.ratingRepository.create(updateRatingInput);
        rating.id = id;
        return this.ratingRepository.save(rating);
    }
    async remove(id) {
        const deleteRating = await this.ratingRepository.findOne(id, {
            relations: ['gig'],
        });
        await this.ratingRepository.remove(deleteRating);
        return deleteRating;
    }
};
RatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RatingService);
exports.RatingService = RatingService;
//# sourceMappingURL=rating.service.js.map