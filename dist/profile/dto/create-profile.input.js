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
exports.CreateProfileInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_entity_1 = require("../entities/profile.entity");
let CreateProfileInput = class CreateProfileInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'first name', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'last name', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All active orders', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "activeOrders", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All completed orders', nullable: true }),
    __metadata("design:type", Number)
], CreateProfileInput.prototype, "completedOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All canceled orders', nullable: true }),
    __metadata("design:type", Number)
], CreateProfileInput.prototype, "canceledOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User specialization', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "specialization", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'about User', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'description mark down', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "descriptionMarkDown", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'file Id', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User achievement', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "achievement", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User rank', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "rank", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User language', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "language", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User status', nullable: true }),
    __metadata("design:type", Boolean)
], CreateProfileInput.prototype, "onlineStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user registration date', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user id', nullable: true }),
    __metadata("design:type", String)
], CreateProfileInput.prototype, "userId", void 0);
CreateProfileInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProfileInput);
exports.CreateProfileInput = CreateProfileInput;
//# sourceMappingURL=create-profile.input.js.map