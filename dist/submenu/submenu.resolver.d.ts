import { SubmenuService } from './submenu.service';
import { Submenu } from './entities/submenu.entity';
import { CreateSubmenuInput } from './dto/create-submenu.input';
import { UpdateSubmenuInput } from './dto/update-submenu.input';
export declare class SubmenuResolver {
    private readonly submenuService;
    constructor(submenuService: SubmenuService);
    createSubmenu(createSubmenuInput: CreateSubmenuInput): Promise<Submenu>;
    findAll(): Promise<Submenu[]>;
    findOne(id: string): Promise<Submenu>;
    updateSubmenu(updateSubmenuInput: UpdateSubmenuInput): Promise<Submenu>;
    removeSubmenu(id: string): Promise<Submenu>;
}
