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
exports.EarningsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const earning_entity_1 = require("./entities/earning.entity");
let EarningsService = class EarningsService {
    constructor(earningRepository) {
        this.earningRepository = earningRepository;
    }
    create(createEarningInput) {
        const earning = this.earningRepository.create(createEarningInput);
        return this.earningRepository.save(earning);
    }
    findAll() {
        return this.earningRepository.find();
    }
    findOne(id) {
        return this.earningRepository.findOne(id);
    }
    async update(user, updateEarningInput) {
        const wallet = await this.earningRepository.findOne({
            relations: ['user'],
            where: {
                user,
            },
        });
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateEarningInput);
        const result = Object.assign(Object.assign({}, wallet), value);
        return this.earningRepository.save(result);
    }
    async remove(id) {
        const deleteEarning = await this.earningRepository.findOne(id);
        await this.earningRepository.remove(deleteEarning);
        return deleteEarning;
    }
};
EarningsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(earning_entity_1.Earning)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EarningsService);
exports.EarningsService = EarningsService;
//# sourceMappingURL=earnings.service.js.map