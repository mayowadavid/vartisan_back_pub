import { CreateHomeInput } from './dto/create-home.input';
import { UpdateHomeInput } from './dto/update-home.input';
import { Home } from './entities/home.entity';
import { Repository } from 'typeorm';
export declare class HomeService {
    private homeRepository;
    constructor(homeRepository: Repository<Home>);
    create(createHomeInput: CreateHomeInput): Promise<Home>;
    findAll(): Promise<Home[]>;
    findOne(id: string): Promise<Home>;
    update(id: string, updateHomeInput: UpdateHomeInput): Promise<Home>;
    remove(id: string): Promise<Home>;
}
