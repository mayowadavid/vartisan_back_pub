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
exports.UpdateHeaderInput = void 0;
const create_header_input_1 = require("./create-header.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateHeaderInput = class UpdateHeaderInput extends (0, graphql_1.PartialType)(create_header_input_1.CreateHeaderInput) {
};
__decorate([
    (0, graphql_1.Field)({ description: 'headers id', nullable: false }),
    __metadata("design:type", String)
], UpdateHeaderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headers name', nullable: false }),
    __metadata("design:type", String)
], UpdateHeaderInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headers menu', nullable: false }),
    __metadata("design:type", String)
], UpdateHeaderInput.prototype, "headerMenu", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'headers menu id', nullable: false }),
    __metadata("design:type", String)
], UpdateHeaderInput.prototype, "menuId", void 0);
UpdateHeaderInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateHeaderInput);
exports.UpdateHeaderInput = UpdateHeaderInput;
//# sourceMappingURL=update-header.input.js.map