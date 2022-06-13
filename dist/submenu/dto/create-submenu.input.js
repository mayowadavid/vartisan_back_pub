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
exports.CreateSubmenuInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateSubmenuInput = class CreateSubmenuInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateSubmenuInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu name', nullable: false }),
    __metadata("design:type", String)
], CreateSubmenuInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu url', nullable: false }),
    __metadata("design:type", String)
], CreateSubmenuInput.prototype, "menuUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'menu id', nullable: false }),
    __metadata("design:type", String)
], CreateSubmenuInput.prototype, "menuId", void 0);
CreateSubmenuInput = __decorate([
    (0, graphql_1.InputType)()
], CreateSubmenuInput);
exports.CreateSubmenuInput = CreateSubmenuInput;
//# sourceMappingURL=create-submenu.input.js.map