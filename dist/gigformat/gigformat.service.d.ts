import { CreateGigformatInput } from './dto/create-gigformat.input';
import { UpdateGigformatInput } from './dto/update-gigformat.input';
import { Repository } from 'typeorm';
import { Gigformat } from './entities/gigformat.entity';
export declare class GigformatService {
    private gigFormatRepository;
    constructor(gigFormatRepository: Repository<Gigformat>);
    create(createGigformatInput: CreateGigformatInput): Promise<Gigformat>;
    findAll(): Promise<Gigformat[]>;
    findOne(id: string): Promise<Gigformat>;
    update(id: string, updateGigformatInput: UpdateGigformatInput): Promise<Gigformat>;
    remove(id: string): Promise<Gigformat>;
}
