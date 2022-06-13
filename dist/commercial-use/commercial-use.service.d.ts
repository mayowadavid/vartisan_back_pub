import { CreateCommercialUseInput } from './dto/create-commercial-use.input';
import { UpdateCommercialUseInput } from './dto/update-commercial-use.input';
import { Repository } from 'typeorm';
import { CommercialUse } from './entities/commercial-use.entity';
export declare class CommercialUseService {
    private commercialUseRepository;
    constructor(commercialUseRepository: Repository<CommercialUse>);
    create(createCommercialUseInput: CreateCommercialUseInput): Promise<CommercialUse>;
    findAll(): Promise<CommercialUse[]>;
    findOne(id: string): Promise<CommercialUse>;
    update(id: string, updateCommercialUseInput: UpdateCommercialUseInput): Promise<CommercialUse>;
    remove(id: string): Promise<CommercialUse>;
}
