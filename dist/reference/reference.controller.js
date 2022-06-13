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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const reference_service_1 = require("./reference.service");
const common_2 = require("@nestjs/common");
const gql_users_guard_1 = require("../users/gql-users.guard");
const current_user_1 = require("../users/current-user");
let ReferenceController = class ReferenceController {
    constructor(referenceService) {
        this.referenceService = referenceService;
    }
    async addImage(request, response, user, files) {
        return await this.referenceService.upload(files, request, user, response);
    }
};
__decorate([
    (0, common_1.Post)('imageUpload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file')),
    (0, common_2.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, current_user_1.CurrentUser)()),
    __param(3, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ReferenceController.prototype, "addImage", null);
ReferenceController = __decorate([
    (0, common_1.Controller)('reference'),
    __metadata("design:paramtypes", [reference_service_1.ReferenceService])
], ReferenceController);
exports.ReferenceController = ReferenceController;
//# sourceMappingURL=reference.controller.js.map