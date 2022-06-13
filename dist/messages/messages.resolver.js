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
exports.MessagesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const messages_service_1 = require("./messages.service");
const message_entity_1 = require("./entities/message.entity");
const create_message_input_1 = require("./dto/create-message.input");
const update_message_input_1 = require("./dto/update-message.input");
const gql_users_guard_1 = require("../users/gql-users.guard");
const common_1 = require("@nestjs/common");
const current_user_1 = require("../users/current-user");
const graphql_subscriptions_1 = require("graphql-subscriptions");
let MessagesResolver = class MessagesResolver {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.pubSub = new graphql_subscriptions_1.PubSub();
    }
    async createMessage(user, createMessageInput) {
        const message = await this.messagesService.create(user, createMessageInput);
        this.pubSub.publish('messageSubscription', {
            messageSubscription: message,
        });
        return message;
    }
    findAll() {
        return this.messagesService.findAll();
    }
    findOne(id) {
        return this.messagesService.findOne(id);
    }
    updateMessage(updateMessageInput) {
        return this.messagesService.update(updateMessageInput.id, updateMessageInput);
    }
    removeMessage(id) {
        return this.messagesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message, { name: 'createMessage' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createMessageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_message_input_1.CreateMessageInput]),
    __metadata("design:returntype", Promise)
], MessagesResolver.prototype, "createMessage", null);
__decorate([
    (0, graphql_1.Query)(() => [message_entity_1.Message], { name: 'getAllmessages' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessagesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => message_entity_1.Message, { name: 'message' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessagesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    __param(0, (0, graphql_1.Args)('updateMessageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_message_input_1.UpdateMessageInput]),
    __metadata("design:returntype", void 0)
], MessagesResolver.prototype, "updateMessage", null);
__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessagesResolver.prototype, "removeMessage", null);
MessagesResolver = __decorate([
    (0, graphql_1.Resolver)(() => message_entity_1.Message),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesResolver);
exports.MessagesResolver = MessagesResolver;
//# sourceMappingURL=messages.resolver.js.map