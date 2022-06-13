import { CreateGigRequirementInput } from './dto/create-gig-requirement.input';
import { UpdateGigRequirementInput } from './dto/update-gig-requirement.input';
import { Repository } from 'typeorm';
import { GigRequirement } from './entities/gig-requirement.entity';
export declare class GigRequirementService {
    private gigRequirementRepository;
    constructor(gigRequirementRepository: Repository<GigRequirement>);
    create(createGigRequirementInput: CreateGigRequirementInput): Promise<GigRequirement>;
    findAll(): Promise<GigRequirement[]>;
    findOne(id: string): Promise<GigRequirement>;
    update(id: string, updateGigRequirementInput: UpdateGigRequirementInput): Promise<GigRequirement>;
    remove(id: string): Promise<GigRequirement>;
}
