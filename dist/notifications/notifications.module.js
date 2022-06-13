"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = void 0;
const common_1 = require("@nestjs/common");
const notifications_service_1 = require("./notifications.service");
const notifications_resolver_1 = require("./notifications.resolver");
const notification_entity_1 = require("./entities/notification.entity");
const typeorm_1 = require("@nestjs/typeorm");
const pusher_service_1 = require("../pusher/pusher.service");
let NotificationsModule = class NotificationsModule {
};
NotificationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([notification_entity_1.Notification])],
        providers: [notifications_resolver_1.NotificationsResolver, notifications_service_1.NotificationsService, pusher_service_1.PusherService],
        exports: [notifications_service_1.NotificationsService],
    })
], NotificationsModule);
exports.NotificationsModule = NotificationsModule;
//# sourceMappingURL=notifications.module.js.map