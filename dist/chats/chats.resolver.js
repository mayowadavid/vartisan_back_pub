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
exports.ChatsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const chats_service_1 = require("./chats.service");
const chat_entity_1 = require("./entities/chat.entity");
const create_chat_input_1 = require("./dto/create-chat.input");
const update_chat_input_1 = require("./dto/update-chat.input");
const gql_users_guard_1 = require("../users/gql-users.guard");
const common_1 = require("@nestjs/common");
const current_user_1 = require("../users/current-user");
let ChatsResolver = class ChatsResolver {
    constructor(chatsService) {
        this.chatsService = chatsService;
    }
    createChat(user, createChatInput) {
        return this.chatsService.create(user, createChatInput);
    }
    findAll() {
        return this.chatsService.findAll();
    }
    findChatByUser(user) {
        return this.chatsService.findChatByUser(user);
    }
    findOne(id) {
        return this.chatsService.findOne(id);
    }
    findChatByExisyence(user, createChatInput) {
        return this.chatsService.findChatByExistence(user, createChatInput);
    }
    updateChat(user, updateChatInput) {
        return this.chatsService.update(user, updateChatInput.id, updateChatInput);
    }
    removeChat(id) {
        return this.chatsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat, { name: 'createChat' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createChat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_chat_input_1.CreateChatInput]),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "createChat", null);
__decorate([
    (0, graphql_1.Query)(() => [chat_entity_1.Chat], { name: 'chats' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => [chat_entity_1.Chat], { name: 'chatsByUser' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "findChatByUser", null);
__decorate([
    (0, graphql_1.Query)(() => chat_entity_1.Chat, { name: 'chat' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => chat_entity_1.Chat, { name: 'findChatByExistence' }),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createChat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_chat_input_1.CreateChatInput]),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "findChatByExisyence", null);
__decorate([
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat),
    (0, common_1.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, current_user_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('updateChatInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_chat_input_1.UpdateChatInput]),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "updateChat", null);
__decorate([
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "removeChat", null);
ChatsResolver = __decorate([
    (0, graphql_1.Resolver)(() => chat_entity_1.Chat),
    __metadata("design:paramtypes", [chats_service_1.ChatsService])
], ChatsResolver);
exports.ChatsResolver = ChatsResolver;
//# sourceMappingURL=chats.resolver.js.map