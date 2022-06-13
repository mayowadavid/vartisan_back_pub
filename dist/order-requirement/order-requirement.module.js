"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRequirementModule = void 0;
const common_1 = require("@nestjs/common");
const order_requirement_service_1 = require("./order-requirement.service");
const order_requirement_resolver_1 = require("./order-requirement.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const order_requirement_entity_1 = require("./entities/order-requirement.entity");
const order_requirement_controller_1 = require("./order-requirement.controller");
const files_service_1 = require("../files/files.service");
const file_entity_1 = require("../files/entities/file.entity");
let OrderRequirementModule = class OrderRequirementModule {
};
OrderRequirementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_requirement_entity_1.OrderRequirement, file_entity_1.File])],
        providers: [order_requirement_resolver_1.OrderRequirementResolver, order_requirement_service_1.OrderRequirementService, files_service_1.FilesService],
        controllers: [order_requirement_controller_1.OrderRequirementController],
    })
], OrderRequirementModule);
exports.OrderRequirementModule = OrderRequirementModule;
//# sourceMappingURL=order-requirement.module.js.map