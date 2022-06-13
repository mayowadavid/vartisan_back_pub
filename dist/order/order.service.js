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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_entity_1 = require("./entities/order.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notifications_service_1 = require("../notifications/notifications.service");
const create_notification_input_1 = require("../notifications/dto/create-notification.input");
let OrderService = class OrderService {
    constructor(orderRepository, notificationService) {
        this.orderRepository = orderRepository;
        this.notificationService = notificationService;
    }
    async create(user, createOrderInput) {
        const order = this.orderRepository.create(createOrderInput);
        order.client = user;
        order.clientId = user.id;
        const result = await this.orderRepository.save(order);
        const date = new Date();
        const notification = new create_notification_input_1.CreateNotificationInput();
        notification.name = 'order';
        notification.description = 'congratulations your order have been made';
        notification.userId = user.id;
        notification.createdAt = date.toString();
        await this.notificationService.create(notification);
        notification.description = 'congratulations you have a new order';
        notification.createdAt = date.toString();
        notification.userId = createOrderInput.sellerId;
        await this.notificationService.create(notification);
        return result;
    }
    findAll() {
        return this.orderRepository.find({
            relations: [
                'orderFaq',
                'orderRequirement',
                'message',
                'message.user',
                'message.file',
                'client',
                'seller',
            ],
        });
    }
    findOne(id) {
        return this.orderRepository.findOne(id, {
            relations: [
                'orderFaq',
                'orderRequirement',
                'message',
                'message.user',
                'message.file',
                'client',
                'seller',
            ],
        });
    }
    findClientOrder(user) {
        return this.orderRepository.find({
            relations: [
                'orderFaq',
                'orderRequirement',
                'message',
                'message.user',
                'message.file',
                'client',
                'seller',
            ],
            where: {
                clientId: user.id,
            },
        });
    }
    findSellerOrder(user) {
        return this.orderRepository.find({
            relations: [
                'orderFaq',
                'orderRequirement',
                'message',
                'message.user',
                'message.file',
                'client',
                'seller',
            ],
            where: {
                sellerId: user.id,
            },
        });
    }
    async update(user, id, updateOrderInput) {
        const order = await this.orderRepository.findOne(id);
        order.client = user;
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateOrderInput);
        const result = Object.assign(Object.assign({}, order), value);
        return this.orderRepository.save(result);
    }
    async remove(id) {
        const deleteOrder = await this.orderRepository.findOne(id, {
            relations: ['orderFaq', 'orderRequirement'],
        });
        await this.orderRepository.remove(deleteOrder);
        return deleteOrder;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        notifications_service_1.NotificationsService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map