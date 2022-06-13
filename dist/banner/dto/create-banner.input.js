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
exports.CreateBannerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateBannerInput = class CreateBannerInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'bannerTitle', nullable: true }),
    __metadata("design:type", String)
], CreateBannerInput.prototype, "bannerTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerDescription', nullable: true }),
    __metadata("design:type", String)
], CreateBannerInput.prototype, "bannerDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerMiddleContent', nullable: true }),
    __metadata("design:type", String)
], CreateBannerInput.prototype, "bannerMiddleContent", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerFirstACtionTitle', nullable: true }),
    __metadata("design:type", String)
], CreateBannerInput.prototype, "bannerFirstActionTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerSecondACtionTitle', nullable: true }),
    __metadata("design:type", String)
], CreateBannerInput.prototype, "bannerSecondACtionTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'file id', nullable: true }),
    __metadata("design:type", String)
], CreateBannerInput.prototype, "fileId", void 0);
CreateBannerInput = __decorate([
    (0, graphql_1.InputType)()
], CreateBannerInput);
exports.CreateBannerInput = CreateBannerInput;
//# sourceMappingURL=create-banner.input.js.map