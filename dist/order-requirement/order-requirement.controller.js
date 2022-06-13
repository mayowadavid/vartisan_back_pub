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
exports.OrderRequirementController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const order_requirement_service_1 = require("./order-requirement.service");
const common_2 = require("@nestjs/common");
const gql_users_guard_1 = require("../users/gql-users.guard");
let OrderRequirementController = class OrderRequirementController {
    constructor(orderRequirementService) {
        this.orderRequirementService = orderRequirementService;
    }
    async addImage(request, response, files) {
        return await this.orderRequirementService.upload(files, request, response);
    }
};
__decorate([
    (0, common_1.Post)('imageUpload'),
    (0, common_2.UseGuards)(gql_users_guard_1.GqlAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderRequirementController.prototype, "addImage", null);
OrderRequirementController = __decorate([
    (0, common_1.Controller)('order-requirement'),
    __metadata("design:paramtypes", [order_requirement_service_1.OrderRequirementService])
], OrderRequirementController);
exports.OrderRequirementController = OrderRequirementController;
//# sourceMappingURL=order-requirement.controller.js.map