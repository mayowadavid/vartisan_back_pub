import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
export declare class MenuResolver {
    private readonly menuService;
    constructor(menuService: MenuService);
    createMenu(createMenuInput: CreateMenuInput): Promise<Menu>;
    findAll(): Promise<Menu[]>;
    findOne(id: string): Promise<Menu>;
    updateMenu(updateMenuInput: UpdateMenuInput): Promise<Menu>;
    removeMenu(id: string): Promise<Menu>;
}
