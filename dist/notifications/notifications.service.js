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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const notification_entity_1 = require("./entities/notification.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pusher_service_1 = require("../pusher/pusher.service");
let NotificationsService = class NotificationsService {
    constructor(notificationRepository, pusherService) {
        this.notificationRepository = notificationRepository;
        this.pusherService = pusherService;
    }
    async create(createNotificationInput) {
        const Notification = this.notificationRepository.create(createNotificationInput);
        const notify = await this.notificationRepository.save(Notification);
        const userId = notify.userId;
        await this.pusherService.trigger(`${userId}`, 'notification', Object.assign({}, notify));
        return notify;
    }
    findAll() {
        return this.notificationRepository.find({
            relations: ['user'],
        });
    }
    findUserNotification(user) {
        return this.notificationRepository.find({
            relations: ['user'],
            where: {
                user,
            },
        });
    }
    findOne(id) {
        return this.notificationRepository.findOne(id);
    }
    async update(id, updateNotificationInput) {
        const notification = await this.notificationRepository.findOne(id);
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const value = clean(updateNotificationInput);
        const result = Object.assign(Object.assign({}, notification), value);
        return this.notificationRepository.save(result);
    }
    async remove(id) {
        const deleteNotification = await this.notificationRepository.findOne(id);
        await this.notificationRepository.remove(deleteNotification);
        return deleteNotification;
    }
};
NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_entity_1.Notification)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        pusher_service_1.PusherService])
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map