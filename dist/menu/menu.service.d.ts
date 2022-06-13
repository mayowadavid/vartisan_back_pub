import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
export declare class MenuService {
    private menuRepository;
    constructor(menuRepository: Repository<Menu>);
    create(createMenuInput: CreateMenuInput): Promise<Menu>;
    findAll(): Promise<Menu[]>;
    findOne(id: string): Promise<Menu>;
    update(id: string, updateMenuInput: UpdateMenuInput): Promise<Menu>;
    remove(id: string): Promise<Menu>;
}
