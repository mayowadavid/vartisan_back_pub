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
exports.SubmenuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const submenu_entity_1 = require("./entities/submenu.entity");
let SubmenuService = class SubmenuService {
    constructor(subMenuRepository) {
        this.subMenuRepository = subMenuRepository;
    }
    create(createSubmenuInput) {
        const submenu = this.subMenuRepository.create(createSubmenuInput);
        return this.subMenuRepository.save(submenu);
    }
    findAll() {
        return this.subMenuRepository.find({
            relations: ['menu'],
        });
    }
    findOne(id) {
        return this.subMenuRepository.findOne(id, {
            relations: ['menu'],
        });
    }
    update(id, updateSubmenuInput) {
        const submenu = this.subMenuRepository.create(updateSubmenuInput);
        submenu.id = id;
        return this.subMenuRepository.save(submenu);
    }
    async remove(id) {
        const deleteSubmenu = await this.subMenuRepository.findOne(id, {
            relations: ['menu'],
        });
        await this.subMenuRepository.remove(deleteSubmenu);
        return deleteSubmenu;
    }
};
SubmenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(submenu_entity_1.Submenu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubmenuService);
exports.SubmenuService = SubmenuService;
//# sourceMappingURL=submenu.service.js.map