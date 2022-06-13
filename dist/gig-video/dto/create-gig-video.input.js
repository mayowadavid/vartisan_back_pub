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
exports.CreateGigVideoInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateGigVideoInput = class CreateGigVideoInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'gig name', nullable: true }),
    __metadata("design:type", String)
], CreateGigVideoInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig default video', nullable: true }),
    __metadata("design:type", Boolean)
], CreateGigVideoInput.prototype, "selected", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'fileId', nullable: true }),
    __metadata("design:type", String)
], CreateGigVideoInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig Id', nullable: true }),
    __metadata("design:type", String)
], CreateGigVideoInput.prototype, "gigId", void 0);
CreateGigVideoInput = __decorate([
    (0, graphql_1.InputType)()
], CreateGigVideoInput);
exports.CreateGigVideoInput = CreateGigVideoInput;
//# sourceMappingURL=create-gig-video.input.js.map