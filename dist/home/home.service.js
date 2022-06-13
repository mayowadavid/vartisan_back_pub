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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const home_entity_1 = require("./entities/home.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let HomeService = class HomeService {
    constructor(homeRepository) {
        this.homeRepository = homeRepository;
    }
    create(createHomeInput) {
        const home = this.homeRepository.create(createHomeInput);
        return this.homeRepository.save(home);
    }
    findAll() {
        return this.homeRepository.find({
            relations: ['category', 'homeFaq', 'header'],
        });
    }
    findOne(id) {
        return this.homeRepository.findOne(id, {
            relations: ['category', 'homeFaq', 'header'],
        });
    }
    update(id, updateHomeInput) {
        const home = this.homeRepository.create(updateHomeInput);
        home.id = id;
        return this.homeRepository.save(home);
    }
    async remove(id) {
        const deleteHome = await this.homeRepository.findOne(id, {
            relations: ['category', 'homeFaq', 'header'],
        });
        await this.homeRepository.remove(deleteHome);
        return deleteHome;
    }
};
HomeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(home_entity_1.Home)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map