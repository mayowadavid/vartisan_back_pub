import { CreateSubmenuInput } from './dto/create-submenu.input';
import { UpdateSubmenuInput } from './dto/update-submenu.input';
import { Repository } from 'typeorm';
import { Submenu } from './entities/submenu.entity';
export declare class SubmenuService {
    private subMenuRepository;
    constructor(subMenuRepository: Repository<Submenu>);
    create(createSubmenuInput: CreateSubmenuInput): Promise<Submenu>;
    findAll(): Promise<Submenu[]>;
    findOne(id: string): Promise<Submenu>;
    update(id: string, updateSubmenuInput: UpdateSubmenuInput): Promise<Submenu>;
    remove(id: string): Promise<Submenu>;
}
