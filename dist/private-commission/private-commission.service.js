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
exports.PrivateCommissionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const private_commission_entity_1 = require("./entities/private-commission.entity");
let PrivateCommissionService = class PrivateCommissionService {
    constructor(privateCommissionRepository) {
        this.privateCommissionRepository = privateCommissionRepository;
    }
    create(createPrivateCommissionInput) {
        const privateCommission = this.privateCommissionRepository.create(createPrivateCommissionInput);
        return this.privateCommissionRepository.save(privateCommission);
    }
    findAll() {
        return this.privateCommissionRepository.find({
            relations: ['gig'],
        });
    }
    findOne(id) {
        return this.privateCommissionRepository.findOne(id, {
            relations: ['gig'],
        });
    }
    update(id, updatePrivateCommissionInput) {
        const privateCommission = this.privateCommissionRepository.create(updatePrivateCommissionInput);
        privateCommission.id = id;
        return this.privateCommissionRepository.save(privateCommission);
    }
    async remove(id) {
        const deletePrivateCommission = await this.privateCommissionRepository.findOne(id, {
            relations: ['gig'],
        });
        await this.privateCommissionRepository.remove(deletePrivateCommission);
        return deletePrivateCommission;
    }
};
PrivateCommissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(private_commission_entity_1.PrivateCommission)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PrivateCommissionService);
exports.PrivateCommissionService = PrivateCommissionService;
//# sourceMappingURL=private-commission.service.js.map