import { CreateOrderRequirementInput } from './create-order-requirement.input';
declare const UpdateOrderRequirementInput_base: import("@nestjs/common").Type<Partial<CreateOrderRequirementInput>>;
export declare class UpdateOrderRequirementInput extends UpdateOrderRequirementInput_base {
    id: string;
    description: string;
    date: string;
    reference: string;
    color: string;
    orderId: string;
}
export {};
