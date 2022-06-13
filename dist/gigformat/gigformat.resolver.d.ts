import { GigformatService } from './gigformat.service';
import { Gigformat } from './entities/gigformat.entity';
import { CreateGigformatInput } from './dto/create-gigformat.input';
import { UpdateGigformatInput } from './dto/update-gigformat.input';
export declare class GigformatResolver {
    private readonly gigformatService;
    constructor(gigformatService: GigformatService);
    createGigformat(createGigformatInput: CreateGigformatInput): Promise<Gigformat>;
    findAll(): Promise<Gigformat[]>;
    findOne(id: string): Promise<Gigformat>;
    updateGigformat(updateGigformatInput: UpdateGigformatInput): Promise<Gigformat>;
    removeGigformat(id: string): Promise<Gigformat>;
}
