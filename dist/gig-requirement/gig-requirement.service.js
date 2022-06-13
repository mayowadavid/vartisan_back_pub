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
exports.GigRequirementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gig_requirement_entity_1 = require("./entities/gig-requirement.entity");
let GigRequirementService = class GigRequirementService {
    constructor(gigRequirementRepository) {
        this.gigRequirementRepository = gigRequirementRepository;
    }
    create(createGigRequirementInput) {
        const gigRequirement = this.gigRequirementRepository.create(createGigRequirementInput);
        return this.gigRequirementRepository.save(gigRequirement);
    }
    findAll() {
        return this.gigRequirementRepository.find({
            relations: ['gig'],
        });
    }
    findOne(id) {
        return this.gigRequirementRepository.findOne(id, {
            relations: ['gig'],
        });
    }
    update(id, updateGigRequirementInput) {
        const gigRequirement = this.gigRequirementRepository.create(updateGigRequirementInput);
        gigRequirement.id = id;
        return this.gigRequirementRepository.save(gigRequirement);
    }
    async remove(id) {
        const deleteGigRequirement = await this.gigRequirementRepository.findOne(id);
        const copy = Object.assign({}, deleteGigRequirement);
        deleteGigRequirement.gig = null;
        const result = await this.gigRequirementRepository.save(deleteGigRequirement);
        await this.gigRequirementRepository.remove(result);
        return copy;
    }
};
GigRequirementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gig_requirement_entity_1.GigRequirement)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GigRequirementService);
exports.GigRequirementService = GigRequirementService;
//# sourceMappingURL=gig-requirement.service.js.map