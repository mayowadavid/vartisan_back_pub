import { CreateMenuInput } from './create-menu.input';
declare const UpdateMenuInput_base: import("@nestjs/common").Type<Partial<CreateMenuInput>>;
export declare class UpdateMenuInput extends UpdateMenuInput_base {
    id: string;
    name: string;
    menuUrl: string;
    headerId: string;
    subMenuId: string;
}
export {};
