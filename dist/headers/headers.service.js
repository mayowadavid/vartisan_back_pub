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
exports.HeadersService = void 0;
const common_1 = require("@nestjs/common");
const header_entity_1 = require("./entities/header.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let HeadersService = class HeadersService {
    constructor(headersRepository) {
        this.headersRepository = headersRepository;
    }
    create(createHeaderInput) {
        const header = this.headersRepository.create(createHeaderInput);
        return this.headersRepository.save(header);
    }
    findAll() {
        return this.headersRepository.find({
            relations: ['menu'],
        });
    }
    findOne(id) {
        return this.headersRepository.findOne(id, { relations: ['menu'] });
    }
    update(id, updateHeaderInput) {
        const header = this.headersRepository.create(updateHeaderInput);
        header.id = id;
        return this.headersRepository.save(header);
    }
    async remove(id) {
        const deleteHeader = await this.headersRepository.findOne(id, {
            relations: ['menu'],
        });
        await this.headersRepository.remove(deleteHeader);
        return deleteHeader;
    }
};
HeadersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(header_entity_1.Header)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HeadersService);
exports.HeadersService = HeadersService;
//# sourceMappingURL=headers.service.js.map