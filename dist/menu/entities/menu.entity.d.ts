import { Header } from 'src/headers/entities/header.entity';
import { Submenu } from 'src/submenu/entities/submenu.entity';
export declare class Menu {
    id: string;
    name: string;
    menuUrl: string;
    header: Header;
    headerId: string;
    submenu: Submenu[];
    subMenuId: string;
}
