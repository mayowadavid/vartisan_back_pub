import { CreateHeaderInput } from './create-header.input';
declare const UpdateHeaderInput_base: import("@nestjs/common").Type<Partial<CreateHeaderInput>>;
export declare class UpdateHeaderInput extends UpdateHeaderInput_base {
    id: string;
    name: string;
    headerMenu: string;
    menuId: string;
}
export {};
