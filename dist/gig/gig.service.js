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
exports.GigService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gig_entity_1 = require("./entities/gig.entity");
let GigService = class GigService {
    constructor(gigRepository) {
        this.gigRepository = gigRepository;
    }
    async create(user, createGigInput) {
        const gig = this.gigRepository.create(createGigInput);
        gig.user = user;
        return this.gigRepository.save(gig);
    }
    findAll() {
        return this.gigRepository.find({
            relations: [
                'rushOrder',
                'commercialUse',
                'privateCommission',
                'category',
                'subCategory',
                'favorite',
                'user',
                'order',
                'gigTag',
                'gigFaq',
                'gigRequirement',
                'gigVideo',
                'gigVideo.file',
                'gigGallery',
                'gigGallery.file',
                'rating',
                'gigFormat',
                'referenceGig',
            ],
        });
    }
    findOne(id) {
        return this.gigRepository.findOne(id, {
            relations: [
                'rushOrder',
                'commercialUse',
                'privateCommission',
                'category',
                'subCategory',
                'favorite',
                'user',
                'order',
                'gigTag',
                'gigFaq',
                'gigRequirement',
                'gigVideo',
                'gigVideo.file',
                'gigGallery',
                'gigGallery.file',
                'rating',
                'gigFormat',
                'referenceGig',
            ],
        });
    }
    async findGigByUser(name, userName) {
        const allGigs = await this.gigRepository.findOne({
            relations: [
                'rushOrder',
                'commercialUse',
                'privateCommission',
                'category',
                'favorite',
                'user',
                'user.profile',
                'user.profile.file',
                'order',
                'gigVideo',
                'gigVideo.file',
                'gigGallery',
                'gigGallery.file',
                'rating',
                'gigFormat',
                'referenceGig',
            ],
            where: {
                name,
                user: {
                    userName,
                },
            },
        });
        return allGigs;
    }
    async findAllUserGig(user) {
        const { userName } = await user;
        console.log(userName);
        const allUserGigs = await this.gigRepository.find({
            relations: [
                'rushOrder',
                'commercialUse',
                'privateCommission',
                'category',
                'favorite',
                'user',
                'user.profile',
                'user.profile.file',
                'order',
                'gigVideo',
                'gigVideo.file',
                'gigGallery',
                'gigGallery.file',
                'rating',
                'gigFormat',
                'referenceGig',
            ],
            where: {
                user: {
                    userName,
                },
            },
        });
        return allUserGigs;
    }
    async update(id, updateGigInput) {
        const allGigs = await this.gigRepository.findOne(id);
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateGigInput);
        const result = Object.assign(Object.assign({}, allGigs), value);
        return this.gigRepository.save(result);
    }
    async remove(id) {
        const deleteGig = await this.gigRepository.findOne(id, {
            relations: [
                'rushOrder',
                'earning',
                'commercialUse',
                'privateCommission',
                'category',
                'subCategory',
                'favorite',
                'user',
                'order',
                'gigTag',
                'gigFaq',
                'gigRequirement',
                'gigVideo',
                'gigVideo.file',
                'gigGallery',
                'gigGallery.file',
                'rating',
                'gigFormat',
                'referenceGig',
            ],
        });
        const copy = Object.assign({}, deleteGig);
        const clean = (obj) => {
            for (const prop in obj) {
                if (prop !== 'id') {
                    obj[prop] = null;
                }
            }
            return obj;
        };
        const value = clean(deleteGig);
        const result = await this.gigRepository.save(value);
        await this.gigRepository.remove(result);
        return copy;
    }
};
GigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gig_entity_1.Gig)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GigService);
exports.GigService = GigService;
//# sourceMappingURL=gig.service.js.map