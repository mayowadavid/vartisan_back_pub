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
exports.CreateHomeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateHomeInput = class CreateHomeInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'site name' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "siteName", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'logo' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "logoUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerImage id' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "bannerImageId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerTitle' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "bannerTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerDescription' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "bannerDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerFirstACtionTitle' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "bannerFirstACtionTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'bannerSecondACtionTitle' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "bannerSecondACtionTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display Category' }),
    __metadata("design:type", Boolean)
], CreateHomeInput.prototype, "showCategory", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'faq id' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "homeFaqId", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display featured category' }),
    __metadata("design:type", Boolean)
], CreateHomeInput.prototype, "showFeatured", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display latest delivery' }),
    __metadata("design:type", Boolean)
], CreateHomeInput.prototype, "showLatest", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display site process' }),
    __metadata("design:type", Boolean)
], CreateHomeInput.prototype, "showProcess", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display site faq' }),
    __metadata("design:type", Boolean)
], CreateHomeInput.prototype, "showFaq", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'display site optin' }),
    __metadata("design:type", Boolean)
], CreateHomeInput.prototype, "showOptin", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'header id' }),
    __metadata("design:type", String)
], CreateHomeInput.prototype, "headerId", void 0);
CreateHomeInput = __decorate([
    (0, graphql_1.InputType)()
], CreateHomeInput);
exports.CreateHomeInput = CreateHomeInput;
//# sourceMappingURL=create-home.input.js.map