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
exports.ComplaintsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const complaints_service_1 = require("./complaints.service");
const complaint_entity_1 = require("./entities/complaint.entity");
const create_complaint_input_1 = require("./dto/create-complaint.input");
const update_complaint_input_1 = require("./dto/update-complaint.input");
let ComplaintsResolver = class ComplaintsResolver {
    constructor(complaintsService) {
        this.complaintsService = complaintsService;
    }
    createComplaint(createComplaintInput) {
        return this.complaintsService.create(createComplaintInput);
    }
    findAll() {
        return this.complaintsService.findAll();
    }
    findOne(id) {
        return this.complaintsService.findOne(id);
    }
    updateComplaint(updateComplaintInput) {
        return this.complaintsService.update(updateComplaintInput.id, updateComplaintInput);
    }
    removeComplaint(id) {
        return this.complaintsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => complaint_entity_1.Complaint),
    __param(0, (0, graphql_1.Args)('createComplaintInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_complaint_input_1.CreateComplaintInput]),
    __metadata("design:returntype", void 0)
], ComplaintsResolver.prototype, "createComplaint", null);
__decorate([
    (0, graphql_1.Query)(() => [complaint_entity_1.Complaint], { name: 'complaints' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComplaintsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => complaint_entity_1.Complaint, { name: 'complaint' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComplaintsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => complaint_entity_1.Complaint),
    __param(0, (0, graphql_1.Args)('updateComplaintInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_complaint_input_1.UpdateComplaintInput]),
    __metadata("design:returntype", void 0)
], ComplaintsResolver.prototype, "updateComplaint", null);
__decorate([
    (0, graphql_1.Mutation)(() => complaint_entity_1.Complaint),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComplaintsResolver.prototype, "removeComplaint", null);
ComplaintsResolver = __decorate([
    (0, graphql_1.Resolver)(() => complaint_entity_1.Complaint),
    __metadata("design:paramtypes", [complaints_service_1.ComplaintsService])
], ComplaintsResolver);
exports.ComplaintsResolver = ComplaintsResolver;
//# sourceMappingURL=complaints.resolver.js.map