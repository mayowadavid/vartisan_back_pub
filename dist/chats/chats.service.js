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
exports.ChatsService = void 0;
const common_1 = require("@nestjs/common");
const chat_entity_1 = require("./entities/chat.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ChatsService = class ChatsService {
    constructor(chatRepository) {
        this.chatRepository = chatRepository;
    }
    create(user, createChatInput) {
        const chat = this.chatRepository.create(createChatInput);
        chat.sender = user;
        chat.senderId = user.id;
        return this.chatRepository.save(chat);
    }
    findAll() {
        return this.chatRepository.find({
            relations: ['message', 'receiver', 'sender'],
        });
    }
    findOne(id) {
        return this.chatRepository.findOne(id, {
            relations: ['message', 'receiver', 'sender'],
        });
    }
    async findChatByUser(user) {
        const chatSent = await this.chatRepository.find({
            relations: [
                'message',
                'message.user',
                'message.user.profile',
                'message.user.profile.file',
                'message.file',
                'receiver',
                'receiver.profile',
                'receiver.profile.file',
                'sender',
                'sender.profile',
                'sender.profile.file',
            ],
            where: {
                senderId: user.id,
            },
        });
        const chatReceived = await this.chatRepository.find({
            relations: [
                'message',
                'message.user',
                'message.user.profile',
                'message.user.profile.file',
                'receiver',
                'receiver.profile',
                'receiver.profile.file',
                'sender',
                'sender.profile',
                'sender.profile.file',
            ],
            where: {
                receiverId: user.id,
            },
        });
        return chatSent.concat(chatReceived);
    }
    async findChatByExistence(user, createChatInput) {
        const result = await this.chatRepository.findOne({
            relations: ['message', 'receiver', 'sender'],
            where: {
                receiverId: createChatInput.receiverId,
                senderId: user.id,
            },
        });
        if (result == undefined) {
            throw new common_1.BadRequestException('you have not yet interacted');
        }
        else {
            return result;
        }
    }
    update(user, id, updateChatInput) {
        const chat = this.chatRepository.create(updateChatInput);
        chat.id = id;
        return this.chatRepository.save(chat);
    }
    async remove(id) {
        const deleteChat = await this.chatRepository.findOne(id, {
            relations: ['message', 'receiver', 'sender'],
        });
        await this.chatRepository.remove(deleteChat);
        return deleteChat;
    }
};
ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_entity_1.Chat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChatsService);
exports.ChatsService = ChatsService;
//# sourceMappingURL=chats.service.js.map