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
exports.GigformatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gigformat_entity_1 = require("./entities/gigformat.entity");
let GigformatService = class GigformatService {
    constructor(gigFormatRepository) {
        this.gigFormatRepository = gigFormatRepository;
    }
    create(createGigformatInput) {
        const gigFormat = this.gigFormatRepository.create(createGigformatInput);
        return this.gigFormatRepository.save(gigFormat);
    }
    findAll() {
        return this.gigFormatRepository.find({
            relations: ['gig'],
        });
    }
    findOne(id) {
        return this.gigFormatRepository.findOne(id, { relations: ['gig'] });
    }
    async update(id, updateGigformatInput) {
        const gigformat = await this.gigFormatRepository.findOne(id);
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateGigformatInput);
        const result = Object.assign(Object.assign({}, gigformat), value);
        return this.gigFormatRepository.save(result);
    }
    async remove(id) {
        const deleteGigformat = await this.gigFormatRepository.findOne(id, {
            relations: ['gig'],
        });
        await this.gigFormatRepository.remove(deleteGigformat);
        return deleteGigformat;
    }
};
GigformatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gigformat_entity_1.Gigformat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GigformatService);
exports.GigformatService = GigformatService;
//# sourceMappingURL=gigformat.service.js.map