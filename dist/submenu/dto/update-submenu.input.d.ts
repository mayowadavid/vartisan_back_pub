import { CreateSubmenuInput } from './create-submenu.input';
declare const UpdateSubmenuInput_base: import("@nestjs/common").Type<Partial<CreateSubmenuInput>>;
export declare class UpdateSubmenuInput extends UpdateSubmenuInput_base {
    id: string;
    name: string;
    menuUrl: string;
    menuId: string;
}
export {};
