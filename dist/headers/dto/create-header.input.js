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
exports.CreateHeaderInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateHeaderInput = class CreateHeaderInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'headers id', nullable: false }),
    __metadata("design:type", String)
], CreateHeaderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headers name', nullable: false }),
    __metadata("design:type", String)
], CreateHeaderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headers menu', nullable: false }),
    __metadata("design:type", String)
], CreateHeaderInput.prototype, "headerMenu", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headers menu id', nullable: false }),
    __metadata("design:type", String)
], CreateHeaderInput.prototype, "menuId", void 0);
CreateHeaderInput = __decorate([
    (0, graphql_1.InputType)()
], CreateHeaderInput);
exports.CreateHeaderInput = CreateHeaderInput;
//# sourceMappingURL=create-header.input.js.map