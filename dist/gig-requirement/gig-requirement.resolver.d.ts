import { GigRequirementService } from './gig-requirement.service';
import { GigRequirement } from './entities/gig-requirement.entity';
import { CreateGigRequirementInput } from './dto/create-gig-requirement.input';
import { UpdateGigRequirementInput } from './dto/update-gig-requirement.input';
export declare class GigRequirementResolver {
    private readonly gigRequirementService;
    constructor(gigRequirementService: GigRequirementService);
    createGigRequirement(createGigRequirementInput: CreateGigRequirementInput): Promise<GigRequirement>;
    findAll(): Promise<GigRequirement[]>;
    findOne(id: string): Promise<GigRequirement>;
    updateGigRequirement(updateGigRequirementInput: UpdateGigRequirementInput): Promise<GigRequirement>;
    removeGigRequirement(id: string): Promise<GigRequirement>;
}
