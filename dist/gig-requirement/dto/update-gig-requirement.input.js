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
exports.UpdateGigRequirementInput = void 0;
const create_gig_requirement_input_1 = require("./create-gig-requirement.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateGigRequirementInput = class UpdateGigRequirementInput extends (0, graphql_1.PartialType)(create_gig_requirement_input_1.CreateGigRequirementInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateGigRequirementInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'requirement name', nullable: true }),
    __metadata("design:type", String)
], UpdateGigRequirementInput.prototype, "requirementName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'required faq', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigRequirementInput.prototype, "required", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq text', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigRequirementInput.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq link url', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigRequirementInput.prototype, "link", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq gig id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigRequirementInput.prototype, "gigId", void 0);
UpdateGigRequirementInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateGigRequirementInput);
exports.UpdateGigRequirementInput = UpdateGigRequirementInput;
//# sourceMappingURL=update-gig-requirement.input.js.map