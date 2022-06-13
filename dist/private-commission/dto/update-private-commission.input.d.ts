import { CreatePrivateCommissionInput } from './create-private-commission.input';
declare const UpdatePrivateCommissionInput_base: import("@nestjs/common").Type<Partial<CreatePrivateCommissionInput>>;
export declare class UpdatePrivateCommissionInput extends UpdatePrivateCommissionInput_base {
    id: string;
    status: boolean;
    price: string;
    deliveryPeriod: string;
    gigId: string;
}
export {};
