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
exports.HomeFaqService = void 0;
const common_1 = require("@nestjs/common");
const home_faq_entity_1 = require("./entities/home-faq.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let HomeFaqService = class HomeFaqService {
    constructor(homeFaqRepository) {
        this.homeFaqRepository = homeFaqRepository;
    }
    create(createHomeFaqInput) {
        const home = this.homeFaqRepository.create(createHomeFaqInput);
        return this.homeFaqRepository.save(home);
    }
    findAll() {
        return this.homeFaqRepository.find({
            relations: ['file'],
        });
    }
    findOne(id) {
        return this.homeFaqRepository.findOne(id, {
            relations: ['file'],
        });
    }
    update(id, updateHomeFaqInput) {
        const homeFaq = this.homeFaqRepository.create(updateHomeFaqInput);
        homeFaq.id = id;
        return this.homeFaqRepository.save(homeFaq);
    }
    async remove(id) {
        const deleteHome = await this.homeFaqRepository.findOne(id, {
            relations: ['file'],
        });
        await this.homeFaqRepository.remove(deleteHome);
        return deleteHome;
    }
};
HomeFaqService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(home_faq_entity_1.HomeFaq)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HomeFaqService);
exports.HomeFaqService = HomeFaqService;
//# sourceMappingURL=home-faq.service.js.map