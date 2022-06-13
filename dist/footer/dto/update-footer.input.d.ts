import { CreateFooterInput } from './create-footer.input';
declare const UpdateFooterInput_base: import("@nestjs/common").Type<Partial<CreateFooterInput>>;
export declare class UpdateFooterInput extends UpdateFooterInput_base {
    id: string;
    name: string;
    description: string;
    menu: string;
}
export {};
