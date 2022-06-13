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
exports.CreateGigformatInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateGigformatInput = class CreateGigformatInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'ai format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "ai", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'psd format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "psd", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'swf format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "swf", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gif format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "gif", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blend format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "blend", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bmpr format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "bmpr", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'eps format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "eps", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'jpg format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "jpg", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'fig format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "fig", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'ico format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "ico", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'png format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "png", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'other format name', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigformatInput.prototype, "other", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig format id', nullable: true }),
    __metadata("design:type", String)
], CreateGigformatInput.prototype, "gigId", void 0);
CreateGigformatInput = __decorate([
    (0, graphql_1.InputType)()
], CreateGigformatInput);
exports.CreateGigformatInput = CreateGigformatInput;
//# sourceMappingURL=create-gigformat.input.js.map