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
exports.UpdateCommentInput = void 0;
const create_comment_input_1 = require("./create-comment.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateCommentInput = class UpdateCommentInput extends (0, graphql_1.PartialType)(create_comment_input_1.CreateCommentInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCommentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'comment description', nullable: true }),
    __metadata("design:type", String)
], UpdateCommentInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'comment date', nullable: true }),
    __metadata("design:type", String)
], UpdateCommentInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'blog comment', nullable: true }),
    __metadata("design:type", String)
], UpdateCommentInput.prototype, "blogId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'userId comment', nullable: true }),
    __metadata("design:type", String)
], UpdateCommentInput.prototype, "userId", void 0);
UpdateCommentInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateCommentInput);
exports.UpdateCommentInput = UpdateCommentInput;
//# sourceMappingURL=update-comment.input.js.map