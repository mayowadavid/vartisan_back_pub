import { CreateOrderTemplateInput } from './create-order-template.input';
declare const UpdateOrderTemplateInput_base: import("@nestjs/common").Type<Partial<CreateOrderTemplateInput>>;
export declare class UpdateOrderTemplateInput extends UpdateOrderTemplateInput_base {
    id: string;
    user: string;
    date: string;
    revision: string;
    orderStatus: string;
    amount: string;
    orderCount: string;
    sourceFile: boolean;
    commercial: boolean;
    rushOrder: boolean;
    end: string;
}
export {};
