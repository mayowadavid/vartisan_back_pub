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
exports.UpdateHomeFaqInput = void 0;
const create_home_faq_input_1 = require("./create-home-faq.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateHomeFaqInput = class UpdateHomeFaqInput extends (0, graphql_1.PartialType)(create_home_faq_input_1.CreateHomeFaqInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateHomeFaqInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq name', nullable: true }),
    __metadata("design:type", String)
], UpdateHomeFaqInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq description', nullable: true }),
    __metadata("design:type", String)
], UpdateHomeFaqInput.prototype, "description", void 0);
UpdateHomeFaqInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateHomeFaqInput);
exports.UpdateHomeFaqInput = UpdateHomeFaqInput;
//# sourceMappingURL=update-home-faq.input.js.map