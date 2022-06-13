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
exports.GigFaqService = void 0;
const common_1 = require("@nestjs/common");
const create_gig_faq_input_1 = require("./dto/create-gig-faq.input");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gig_faq_entity_1 = require("./entities/gig-faq.entity");
let GigFaqService = class GigFaqService {
    constructor(gigFaqRepository) {
        this.gigFaqRepository = gigFaqRepository;
    }
    create(createGigFaqInput) {
        const GigFaq = this.gigFaqRepository.create(createGigFaqInput);
        return this.gigFaqRepository.save(GigFaq);
    }
    findAll() {
        return this.gigFaqRepository.find({
            relations: ['gig'],
        });
    }
    findOne(id) {
        return this.gigFaqRepository.findOne(id, {
            relations: ['gig'],
        });
    }
    update(id, updateGigFaqInput) {
        const gigFaq = this.gigFaqRepository.create(updateGigFaqInput);
        gigFaq.id = id;
        return this.gigFaqRepository.save(gigFaq);
    }
    async remove(id) {
        const success = new create_gig_faq_input_1.CreateGigFaqInput();
        success.name = 'delete successful';
        const deleteGigFaq = await this.gigFaqRepository.findOne(id, {
            relations: ['gig'],
        });
        await this.gigFaqRepository.remove(deleteGigFaq);
        return success.name;
    }
};
GigFaqService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gig_faq_entity_1.GigFaq)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GigFaqService);
exports.GigFaqService = GigFaqService;
//# sourceMappingURL=gig-faq.service.js.map