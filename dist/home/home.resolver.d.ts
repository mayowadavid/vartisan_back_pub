import { HomeService } from './home.service';
import { Home } from './entities/home.entity';
import { CreateHomeInput } from './dto/create-home.input';
import { UpdateHomeInput } from './dto/update-home.input';
export declare class HomeResolver {
    private readonly homeService;
    constructor(homeService: HomeService);
    createHome(createHomeInput: CreateHomeInput): Promise<Home>;
    findAll(): Promise<Home[]>;
    findOne(id: string): Promise<Home>;
    updateHome(updateHomeInput: UpdateHomeInput): Promise<Home>;
    removeHome(id: string): Promise<Home>;
}
