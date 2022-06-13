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
exports.CreateGigFaqInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateGigFaqInput = class CreateGigFaqInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'faq name', nullable: true }),
    __metadata("design:type", String)
], CreateGigFaqInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq description', nullable: true }),
    __metadata("design:type", String)
], CreateGigFaqInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig faq id', nullable: true }),
    __metadata("design:type", String)
], CreateGigFaqInput.prototype, "gigId", void 0);
CreateGigFaqInput = __decorate([
    (0, graphql_1.InputType)()
], CreateGigFaqInput);
exports.CreateGigFaqInput = CreateGigFaqInput;
//# sourceMappingURL=create-gig-faq.input.js.map