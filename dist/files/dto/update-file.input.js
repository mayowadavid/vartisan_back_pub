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
exports.UpdateFileInput = void 0;
const create_file_input_1 = require("./create-file.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateFileInput = class UpdateFileInput extends (0, graphql_1.PartialType)(create_file_input_1.CreateFileInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateFileInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'file name', nullable: true }),
    __metadata("design:type", String)
], UpdateFileInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'banner id', nullable: true }),
    __metadata("design:type", String)
], UpdateFileInput.prototype, "bannerId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'image', nullable: true }),
    __metadata("design:type", String)
], UpdateFileInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'audio', nullable: false }),
    __metadata("design:type", String)
], UpdateFileInput.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'video', nullable: false }),
    __metadata("design:type", String)
], UpdateFileInput.prototype, "video", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'GIF', nullable: true }),
    __metadata("design:type", String)
], UpdateFileInput.prototype, "gif", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'documents', nullable: true }),
    __metadata("design:type", String)
], UpdateFileInput.prototype, "document", void 0);
UpdateFileInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateFileInput);
exports.UpdateFileInput = UpdateFileInput;
//# sourceMappingURL=update-file.input.js.map