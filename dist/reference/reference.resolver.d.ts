import { ReferenceService } from './reference.service';
import { Reference } from './entities/reference.entity';
import { CreateReferenceInput } from './dto/create-reference.input';
import { UpdateReferenceInput } from './dto/update-reference.input';
export declare class ReferenceResolver {
    private readonly referenceService;
    constructor(referenceService: ReferenceService);
    createReference(createReferenceInput: CreateReferenceInput): Promise<Reference>;
    findAll(): Promise<Reference[]>;
    findReferenceByUser(user: any): Promise<Reference[]>;
    findOne(id: string): Promise<Reference>;
    updateReference(updateReferenceInput: UpdateReferenceInput): Promise<Reference>;
    removeReference(id: string): Promise<Reference>;
}
