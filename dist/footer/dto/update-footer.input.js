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
exports.UpdateFooterInput = void 0;
const create_footer_input_1 = require("./create-footer.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateFooterInput = class UpdateFooterInput extends (0, graphql_1.PartialType)(create_footer_input_1.CreateFooterInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateFooterInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'footer name', nullable: false }),
    __metadata("design:type", String)
], UpdateFooterInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'footer description' }),
    __metadata("design:type", String)
], UpdateFooterInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'Menu' }),
    __metadata("design:type", String)
], UpdateFooterInput.prototype, "menu", void 0);
UpdateFooterInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateFooterInput);
exports.UpdateFooterInput = UpdateFooterInput;
//# sourceMappingURL=update-footer.input.js.map