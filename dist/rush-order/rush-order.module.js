"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RushOrderModule = void 0;
const common_1 = require("@nestjs/common");
const rush_order_service_1 = require("./rush-order.service");
const rush_order_resolver_1 = require("./rush-order.resolver");
const rush_order_entity_1 = require("./entities/rush-order.entity");
const typeorm_1 = require("@nestjs/typeorm");
let RushOrderModule = class RushOrderModule {
};
RushOrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rush_order_entity_1.RushOrder])],
        providers: [rush_order_resolver_1.RushOrderResolver, rush_order_service_1.RushOrderService],
    })
], RushOrderModule);
exports.RushOrderModule = RushOrderModule;
//# sourceMappingURL=rush-order.module.js.map