import { ComplaintsService } from './complaints.service';
import { Complaint } from './entities/complaint.entity';
import { CreateComplaintInput } from './dto/create-complaint.input';
import { UpdateComplaintInput } from './dto/update-complaint.input';
export declare class ComplaintsResolver {
    private readonly complaintsService;
    constructor(complaintsService: ComplaintsService);
    createComplaint(createComplaintInput: CreateComplaintInput): Promise<Complaint>;
    findAll(): Promise<Complaint[]>;
    findOne(id: string): Promise<Complaint>;
    updateComplaint(updateComplaintInput: UpdateComplaintInput): Promise<Complaint>;
    removeComplaint(id: string): Promise<Complaint>;
}
