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
exports.UpdateGigformatInput = void 0;
const create_gigformat_input_1 = require("./create-gigformat.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateGigformatInput = class UpdateGigformatInput extends (0, graphql_1.PartialType)(create_gigformat_input_1.CreateGigformatInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateGigformatInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'ai format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "ai", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'psd format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "psd", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'swf format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "swf", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gif format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "gif", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blend format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "blend", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bmpr format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "bmpr", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'eps format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "eps", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'jpg format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "jpg", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'fig format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "fig", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'ico format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "ico", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'png format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "png", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'other format name', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigformatInput.prototype, "other", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig format id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigformatInput.prototype, "gigId", void 0);
UpdateGigformatInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateGigformatInput);
exports.UpdateGigformatInput = UpdateGigformatInput;
//# sourceMappingURL=update-gigformat.input.js.map