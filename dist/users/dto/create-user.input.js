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
exports.CreateUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'client username', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'client email', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'client password', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'profile Id', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'order Id', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'chat Id', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "chatId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig Id', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "gigId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'earning Id', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "earningId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'refresh token', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "refreshToken", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'refresh token exp', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "refreshTokenExp", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'registration date', nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "createdAt", void 0);
CreateUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
//# sourceMappingURL=create-user.input.js.map