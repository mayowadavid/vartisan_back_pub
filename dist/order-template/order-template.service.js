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
exports.OrderTemplateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_template_entity_1 = require("./entities/order-template.entity");
let OrderTemplateService = class OrderTemplateService {
    constructor(orderTemplateRepository) {
        this.orderTemplateRepository = orderTemplateRepository;
    }
    create(createOrderTemplateInput) {
        const orderTemplate = this.orderTemplateRepository.create(createOrderTemplateInput);
        return this.orderTemplateRepository.save(orderTemplate);
    }
    findAll() {
        return this.orderTemplateRepository.find({
            relations: ['order'],
        });
    }
    findOne(id) {
        return this.orderTemplateRepository.findOne(id, {
            relations: ['order'],
        });
    }
    update(id, updateOrderTemplateInput) {
        const OrderTemplate = this.orderTemplateRepository.create(updateOrderTemplateInput);
        OrderTemplate.id = id;
        return this.orderTemplateRepository.save(OrderTemplate);
    }
    async remove(id) {
        const deleteOrderTemplate = await this.orderTemplateRepository.findOne(id, {
            relations: ['order'],
        });
        await this.orderTemplateRepository.remove(deleteOrderTemplate);
        return deleteOrderTemplate;
    }
};
OrderTemplateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_template_entity_1.OrderTemplate)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderTemplateService);
exports.OrderTemplateService = OrderTemplateService;
//# sourceMappingURL=order-template.service.js.map