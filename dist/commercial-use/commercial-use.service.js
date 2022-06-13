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
exports.CommercialUseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const commercial_use_entity_1 = require("./entities/commercial-use.entity");
let CommercialUseService = class CommercialUseService {
    constructor(commercialUseRepository) {
        this.commercialUseRepository = commercialUseRepository;
    }
    create(createCommercialUseInput) {
        const commercialUse = this.commercialUseRepository.create(createCommercialUseInput);
        return this.commercialUseRepository.save(commercialUse);
    }
    findAll() {
        return this.commercialUseRepository.find({
            relations: ['gig'],
        });
    }
    findOne(id) {
        return this.commercialUseRepository.findOne(id, {
            relations: ['gig'],
        });
    }
    update(id, updateCommercialUseInput) {
        const commercialUse = this.commercialUseRepository.create(updateCommercialUseInput);
        commercialUse.id = id;
        return this.commercialUseRepository.save(commercialUse);
    }
    async remove(id) {
        const deleteCommercialUse = await this.commercialUseRepository.findOne(id, {
            relations: ['gig'],
        });
        await this.commercialUseRepository.remove(deleteCommercialUse);
        return deleteCommercialUse;
    }
};
CommercialUseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(commercial_use_entity_1.CommercialUse)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommercialUseService);
exports.CommercialUseService = CommercialUseService;
//# sourceMappingURL=commercial-use.service.js.map