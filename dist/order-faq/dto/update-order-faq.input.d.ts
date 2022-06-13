import { CreateOrderFaqInput } from './create-order-faq.input';
declare const UpdateOrderFaqInput_base: import("@nestjs/common").Type<Partial<CreateOrderFaqInput>>;
export declare class UpdateOrderFaqInput extends UpdateOrderFaqInput_base {
    id: string;
    name: string;
    status: string;
    description: string;
    orderId: string;
}
export {};
