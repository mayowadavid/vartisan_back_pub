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
exports.OrderFaqService = void 0;
const common_1 = require("@nestjs/common");
const order_faq_entity_1 = require("./entities/order-faq.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let OrderFaqService = class OrderFaqService {
    constructor(orderFaqRepository) {
        this.orderFaqRepository = orderFaqRepository;
    }
    create(createOrderFaqInput) {
        const orderFaq = this.orderFaqRepository.create(createOrderFaqInput);
        return this.orderFaqRepository.save(orderFaq);
    }
    findAll() {
        return this.orderFaqRepository.find({
            relations: ['order'],
        });
    }
    findOne(id) {
        return this.orderFaqRepository.findOne(id, {
            relations: ['order'],
        });
    }
    update(id, updateOrderFaqInput) {
        const orderFaq = this.orderFaqRepository.create(updateOrderFaqInput);
        orderFaq.id = id;
        return this.orderFaqRepository.save(orderFaq);
    }
    async remove(id) {
        const deleteOrderFaq = await this.orderFaqRepository.findOne(id, {
            relations: ['order'],
        });
        await this.orderFaqRepository.remove(deleteOrderFaq);
        return deleteOrderFaq;
    }
};
OrderFaqService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_faq_entity_1.OrderFaq)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderFaqService);
exports.OrderFaqService = OrderFaqService;
//# sourceMappingURL=order-faq.service.js.map