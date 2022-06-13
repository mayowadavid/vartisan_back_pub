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
exports.GigTagsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gig_tag_entity_1 = require("./entities/gig-tag.entity");
let GigTagsService = class GigTagsService {
    constructor(gigTagRepository) {
        this.gigTagRepository = gigTagRepository;
    }
    create(GigTagInput) {
        const gigTag = this.gigTagRepository.create(GigTagInput);
        return this.gigTagRepository.save(gigTag);
    }
    findAll() {
        return this.gigTagRepository.find();
    }
    findOne(id) {
        return this.gigTagRepository.findOne(id);
    }
    async update(id, updateGigTagInput) {
        const gigtag = await this.gigTagRepository.findOne(id);
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateGigTagInput);
        const result = Object.assign(Object.assign({}, gigtag), value);
        return this.gigTagRepository.save(result);
    }
    async remove(id) {
        const message = 'tag removed successfully';
        const deleteGigTag = await this.gigTagRepository.findOne(id);
        await this.gigTagRepository.remove(deleteGigTag);
        return message;
    }
};
GigTagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gig_tag_entity_1.GigTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GigTagsService);
exports.GigTagsService = GigTagsService;
//# sourceMappingURL=gig-tags.service.js.map