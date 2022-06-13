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
exports.CreateGigTagInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateGigTagInput = class CreateGigTagInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'tag name', nullable: true }),
    __metadata("design:type", String)
], CreateGigTagInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig id', nullable: true }),
    __metadata("design:type", String)
], CreateGigTagInput.prototype, "gigId", void 0);
CreateGigTagInput = __decorate([
    (0, graphql_1.InputType)()
], CreateGigTagInput);
exports.CreateGigTagInput = CreateGigTagInput;
//# sourceMappingURL=create-gig-tag.input.js.map