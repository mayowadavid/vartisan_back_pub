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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const message_entity_1 = require("./entities/message.entity");
const files_service_1 = require("../files/files.service");
const pusher_service_1 = require("../pusher/pusher.service");
let MessagesService = class MessagesService {
    constructor(messageRepository, fileService, pusherService) {
        this.messageRepository = messageRepository;
        this.fileService = fileService;
        this.pusherService = pusherService;
    }
    async create(userDetail, createMessageInput) {
        const chatId = createMessageInput.chatId;
        const orderId = createMessageInput.orderId;
        const message = this.messageRepository.create(createMessageInput);
        message.user = userDetail;
        const result = await this.messageRepository.save(message);
        if (chatId !== undefined) {
            await this.pusherService.trigger(`${chatId}`, 'message', {
                id: result.id,
                time: result.time,
                date: result.date,
                description: result.description,
                file: [],
                user: {
                    id: userDetail.id,
                    userName: userDetail.userName,
                },
            });
            return result;
        }
        else if (orderId !== undefined) {
            await this.pusherService.trigger(`${orderId}`, 'message', {
                id: result.id,
                time: result.time,
                date: result.date,
                description: result.description,
                file: [],
                user: {
                    id: userDetail.id,
                    userName: userDetail.userName,
                },
            });
            return result;
        }
        else {
            return result;
        }
    }
    findAll() {
        return this.messageRepository.find({
            relations: ['chat', 'file'],
        });
    }
    async upload(files, request, user, response) {
        const Images = [];
        for (let x = 0; x < files.length; x++) {
            const imageBuffer = files[x].buffer;
            const filename = files[x].originalname;
            let fileType;
            const imageType = [
                'image/jpeg',
                'image/png',
                'image/tiff',
                'image/svg+xml',
            ];
            const audioType = ['audio/mpeg'];
            const videoType = ['video/mpeg', 'video/mp4'];
            const documentType = [
                'application/msword',
                'application/gzip',
                'application/vnd.oasis.opendocument.text',
                'application/pdf',
                'application/vnd.ms-powerpoint',
                'application/vnd.rar',
                'video/mp2t',
                'text/plain',
                'application/zip',
                '	application/x-7z-compressed',
            ];
            const gifType = ['image/gif'];
            if (imageType.includes(files[x].mimetype)) {
                fileType = 'image';
            }
            else if (audioType.includes(files[x].mimetype)) {
                fileType = 'audio';
            }
            else if (videoType.includes(files[x].mimetype)) {
                fileType = 'video';
            }
            else if (documentType.includes(files[x].mimetype)) {
                fileType = 'document';
            }
            else if (gifType.includes(files[x].mimetype)) {
                fileType = 'gif';
            }
            else {
                return response.status(200).json('invalid file type');
            }
            await this.fileService
                .uploadPublicFile(imageBuffer, filename, fileType)
                .then((result) => Images.push(result));
        }
        const { chatId, date, time, messageId, orderId } = request.body;
        const clean = (obj) => {
            for (const prop in obj) {
                if (obj[prop] === null || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
            return obj;
        };
        const messageFile = new message_entity_1.Message();
        messageFile.id = messageId;
        messageFile.file = Images;
        messageFile.chatId = chatId;
        messageFile.orderId = orderId;
        messageFile.date = date;
        messageFile.time = time;
        messageFile.user = user;
        const value = clean(messageFile);
        const data = await this.messageRepository.save(value);
        return response.status(200).json(data);
    }
    findMessageByUser() {
        return this.messageRepository.find({
            relations: ['chat', 'file'],
        });
    }
    async findOne(id) {
        return this.messageRepository.findOne(id, {
            relations: ['chat', 'file', 'user'],
        });
    }
    update(id, updateMessageInput) {
        const message = this.messageRepository.create(updateMessageInput);
        message.id = id;
        return this.messageRepository.save(message);
    }
    async remove(id) {
        const deleteMessage = await this.messageRepository.findOne(id, {
            relations: ['headerId', 'subMessageId'],
        });
        await this.messageRepository.remove(deleteMessage);
        return deleteMessage;
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService,
        pusher_service_1.PusherService])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map