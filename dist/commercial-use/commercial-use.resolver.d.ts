import { CommercialUseService } from './commercial-use.service';
import { CommercialUse } from './entities/commercial-use.entity';
import { CreateCommercialUseInput } from './dto/create-commercial-use.input';
import { UpdateCommercialUseInput } from './dto/update-commercial-use.input';
export declare class CommercialUseResolver {
    private readonly commercialUseService;
    constructor(commercialUseService: CommercialUseService);
    createCommercialUse(createCommercialUseInput: CreateCommercialUseInput): Promise<CommercialUse>;
    findAll(): Promise<CommercialUse[]>;
    findOne(id: string): Promise<CommercialUse>;
    updateCommercialUse(updateCommercialUseInput: UpdateCommercialUseInput): Promise<CommercialUse>;
    removeCommercialUse(id: string): Promise<CommercialUse>;
}
