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
exports.CreateMessageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateMessageInput = class CreateMessageInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'message date', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'message time', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'message description', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user Id', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'message file Id', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order Id', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'message chat Id', nullable: true }),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "chatId", void 0);
CreateMessageInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMessageInput);
exports.CreateMessageInput = CreateMessageInput;
//# sourceMappingURL=create-message.input.js.map