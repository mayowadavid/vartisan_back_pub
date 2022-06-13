import { CreateComplaintInput } from './dto/create-complaint.input';
import { UpdateComplaintInput } from './dto/update-complaint.input';
import { Complaint } from './entities/complaint.entity';
import { Repository } from 'typeorm';
export declare class ComplaintsService {
    private complaintRepository;
    constructor(complaintRepository: Repository<Complaint>);
    create(createComplaintInput: CreateComplaintInput): Promise<Complaint>;
    findAll(): Promise<Complaint[]>;
    findOne(id: string): Promise<Complaint>;
    update(id: string, updateComplaintInput: UpdateComplaintInput): Promise<Complaint>;
    remove(id: string): Promise<Complaint>;
}
