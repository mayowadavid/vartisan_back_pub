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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const chat_entity_1 = require("../../chats/entities/chat.entity");
const favorite_entity_1 = require("../../favorites/entities/favorite.entity");
const gig_entity_1 = require("../../gig/entities/gig.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const profile_entity_1 = require("../../profile/entities/profile.entity");
const comment_entity_1 = require("../../comments/entities/comment.entity");
const notification_entity_1 = require("../../notifications/entities/notification.entity");
const typeorm_1 = require("typeorm");
const message_entity_1 = require("../../messages/entities/message.entity");
const reference_entity_1 = require("../../reference/entities/reference.entity");
const blog_entity_1 = require("../../blog/entities/blog.entity");
const earning_entity_1 = require("../../earnings/entities/earning.entity");
const transaction_entity_1 = require("../../transaction/entities/transaction.entity");
var UserStatus;
(function (UserStatus) {
    UserStatus["BANNED"] = "banned";
    UserStatus["APPROVED"] = "approved";
    UserStatus["REJECTED"] = "rejected";
    UserStatus["PENDING"] = "pending";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'client username', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'client email', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'client password', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'profile Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'chat Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "chatId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earning Id', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "earningId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'refresh token', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, name: 'refreshtoken' }),
    __metadata("design:type", String)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'refresh token exp', nullable: true }),
    (0, typeorm_1.Column)({ type: 'date', nullable: true, name: 'refreshtokenexp' }),
    __metadata("design:type", String)
], User.prototype, "refreshTokenExp", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'registration date', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, name: 'registration date' }),
    __metadata("design:type", String)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user status', nullable: true }),
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: UserStatus,
        default: 'pending',
    }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.Transaction, (transaction) => transaction.transactionSender),
    (0, graphql_1.Field)(() => [transaction_entity_1.Transaction], {
        description: 'sender transaction',
        nullable: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "transactionSender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.Transaction, (transaction) => transaction.transactionReceiver),
    (0, graphql_1.Field)(() => [transaction_entity_1.Transaction], {
        description: 'receiver transaction',
        nullable: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "transactionReceiver", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.user),
    (0, graphql_1.Field)(() => [comment_entity_1.Comment], { description: 'user comment', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => blog_entity_1.Blog, (blog) => blog.user, {
        cascade: true,
    }),
    (0, graphql_1.Field)(() => [blog_entity_1.Blog], { description: 'user blog', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "blog", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reference_entity_1.Reference, (reference) => reference.user),
    (0, graphql_1.Field)(() => [reference_entity_1.Reference], { description: 'user reference', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.Notification, (notification) => notification.user),
    (0, graphql_1.Field)(() => [notification_entity_1.Notification], {
        description: 'user notification',
        nullable: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "notification", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chat_entity_1.Chat, (chat) => chat.receiver),
    (0, graphql_1.Field)(() => [chat_entity_1.Chat], { description: 'user orders client', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chat_entity_1.Chat, (chat) => chat.sender),
    (0, graphql_1.Field)(() => [chat_entity_1.Chat], { description: 'user orders seller', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.client),
    (0, graphql_1.Field)(() => [order_entity_1.Order], { description: 'user orders client', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.seller),
    (0, graphql_1.Field)(() => [order_entity_1.Order], { description: 'user orders seller', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => earning_entity_1.Earning, (earning) => earning.user),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => earning_entity_1.Earning, { description: 'user earning', nullable: true }),
    __metadata("design:type", earning_entity_1.Earning)
], User.prototype, "earning", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.Profile, (profile) => profile.user),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => profile_entity_1.Profile, { description: 'chat profile', nullable: true }),
    __metadata("design:type", profile_entity_1.Profile)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, (message) => message.user),
    (0, graphql_1.Field)(() => [message_entity_1.Message], { description: 'user messages' }),
    __metadata("design:type", Array)
], User.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.Favorite, (favorite) => favorite.user),
    (0, graphql_1.Field)(() => [favorite_entity_1.Favorite], { description: 'Gig favorite', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "favorite", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gig_entity_1.Gig, (gig) => gig.user),
    (0, graphql_1.Field)(() => [gig_entity_1.Gig], { description: 'gig', nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "gig", void 0);
User = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map