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
exports.CreateMenuInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateMenuInput = class CreateMenuInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu name', nullable: false }),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu url', nullable: false }),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "menuUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'header id', nullable: false }),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "headerId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'subMenu id', nullable: false }),
    __metadata("design:type", String)
], CreateMenuInput.prototype, "subMenuId", void 0);
CreateMenuInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMenuInput);
exports.CreateMenuInput = CreateMenuInput;
//# sourceMappingURL=create-menu.input.js.map