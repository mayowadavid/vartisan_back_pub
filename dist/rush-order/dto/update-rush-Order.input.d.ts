import { CreateRushOrderInput } from './create-rush-order.input';
declare const UpdateRushOrderInput_base: import("@nestjs/common").Type<Partial<CreateRushOrderInput>>;
export declare class UpdateRushOrderInput extends UpdateRushOrderInput_base {
    id: string;
    status: boolean;
    price: string;
    deliveryPeriod: string;
    gigId: string;
}
export {};
