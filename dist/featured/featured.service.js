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
exports.FeaturedService = void 0;
const common_1 = require("@nestjs/common");
const featured_entity_1 = require("./entities/featured.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let FeaturedService = class FeaturedService {
    constructor(featuredRepository) {
        this.featuredRepository = featuredRepository;
    }
    create(createFeaturedInput) {
        const featured = this.featuredRepository.create(createFeaturedInput);
        return this.featuredRepository.save(featured);
    }
    findAll() {
        return this.featuredRepository.find();
    }
    findOne(id) {
        return this.featuredRepository.findOne(id);
    }
    update(id, updateFeaturedInput) {
        const featured = this.featuredRepository.create(updateFeaturedInput);
        featured.id = id;
        return this.featuredRepository.save(featured);
    }
    async remove(id) {
        const deleteFeatured = await this.featuredRepository.findOne(id, {
            relations: ['employees'],
        });
        await this.featuredRepository.remove(deleteFeatured);
        return deleteFeatured;
    }
};
FeaturedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(featured_entity_1.Featured)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FeaturedService);
exports.FeaturedService = FeaturedService;
//# sourceMappingURL=featured.service.js.map