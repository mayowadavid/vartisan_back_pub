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
exports.UpdateReferenceInput = void 0;
const create_reference_input_1 = require("./create-reference.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateReferenceInput = class UpdateReferenceInput extends (0, graphql_1.PartialType)(create_reference_input_1.CreateReferenceInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateReferenceInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'reference name', nullable: true }),
    __metadata("design:type", String)
], UpdateReferenceInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'reference default', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateReferenceInput.prototype, "selected", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'reference description', nullable: true }),
    __metadata("design:type", String)
], UpdateReferenceInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'reference id', nullable: true }),
    __metadata("design:type", String)
], UpdateReferenceInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig reference id', nullable: true }),
    __metadata("design:type", String)
], UpdateReferenceInput.prototype, "gigReferenceId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig reference id', nullable: true }),
    __metadata("design:type", String)
], UpdateReferenceInput.prototype, "userId", void 0);
UpdateReferenceInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateReferenceInput);
exports.UpdateReferenceInput = UpdateReferenceInput;
//# sourceMappingURL=update-reference.input.js.map