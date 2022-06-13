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
exports.UpdateUserInput = void 0;
const create_user_input_1 = require("./create-user.input");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../entities/user.entity");
let UpdateUserInput = class UpdateUserInput extends (0, graphql_1.PartialType)(create_user_input_1.CreateUserInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'client username', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'client email', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'client password', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'profile Id', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order Id', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'chat Id', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "chatId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig Id', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earning Id', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "earningId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'refresh token', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "refreshToken", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'refresh token exp', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "refreshTokenExp", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'registration date', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user status', nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "status", void 0);
UpdateUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);
exports.UpdateUserInput = UpdateUserInput;
//# sourceMappingURL=update-user.input.js.map