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
exports.UpdateProfileInput = void 0;
const create_profile_input_1 = require("./create-profile.input");
const graphql_1 = require("@nestjs/graphql");
const profile_entity_1 = require("../entities/profile.entity");
let UpdateProfileInput = class UpdateProfileInput extends (0, graphql_1.PartialType)(create_profile_input_1.CreateProfileInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'first name', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'last name', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All active orders', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "activeOrders", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All completed orders', nullable: true }),
    __metadata("design:type", Number)
], UpdateProfileInput.prototype, "completedOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'All canceled orders', nullable: true }),
    __metadata("design:type", Number)
], UpdateProfileInput.prototype, "canceledOrder", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User specialization', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "specialization", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'about User', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'description mark down', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "descriptionMarkDown", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'file Id', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User achievement', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "achievement", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User rank', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "rank", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User language', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "language", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'User status', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateProfileInput.prototype, "onlineStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user registration date', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user id', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'user role', nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "role", void 0);
UpdateProfileInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateProfileInput);
exports.UpdateProfileInput = UpdateProfileInput;
//# sourceMappingURL=update-profile.input.js.map