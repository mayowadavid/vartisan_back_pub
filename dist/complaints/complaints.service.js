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
exports.ComplaintsService = void 0;
const common_1 = require("@nestjs/common");
const complaint_entity_1 = require("./entities/complaint.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ComplaintsService = class ComplaintsService {
    constructor(complaintRepository) {
        this.complaintRepository = complaintRepository;
    }
    create(createComplaintInput) {
        const complaint = this.complaintRepository.create(createComplaintInput);
        return this.complaintRepository.save(complaint);
    }
    findAll() {
        return this.complaintRepository.find();
    }
    findOne(id) {
        return this.complaintRepository.findOne(id);
    }
    update(id, updateComplaintInput) {
        const complaint = this.complaintRepository.create(updateComplaintInput);
        complaint.id = id;
        return this.complaintRepository.save(complaint);
    }
    async remove(id) {
        const deleteComplaint = await this.complaintRepository.findOne(id);
        await this.complaintRepository.remove(deleteComplaint);
        return deleteComplaint;
    }
};
ComplaintsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(complaint_entity_1.Complaint)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ComplaintsService);
exports.ComplaintsService = ComplaintsService;
//# sourceMappingURL=complaints.service.js.map