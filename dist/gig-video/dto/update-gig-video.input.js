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
exports.UpdateGigVideoInput = void 0;
const create_gig_video_input_1 = require("./create-gig-video.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateGigVideoInput = class UpdateGigVideoInput extends (0, graphql_1.PartialType)(create_gig_video_input_1.CreateGigVideoInput) {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateGigVideoInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig name', nullable: true }),
    __metadata("design:type", String)
], UpdateGigVideoInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig default video', nullable: true }),
    __metadata("design:type", Boolean)
], UpdateGigVideoInput.prototype, "selected", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'fileId', nullable: true }),
    __metadata("design:type", String)
], UpdateGigVideoInput.prototype, "fileId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'gig Id', nullable: true }),
    __metadata("design:type", String)
], UpdateGigVideoInput.prototype, "gigId", void 0);
UpdateGigVideoInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateGigVideoInput);
exports.UpdateGigVideoInput = UpdateGigVideoInput;
//# sourceMappingURL=update-gig-video.input.js.map