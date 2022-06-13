import { CreateCommercialUseInput } from './create-commercial-use.input';
declare const UpdateCommercialUseInput_base: import("@nestjs/common").Type<Partial<CreateCommercialUseInput>>;
export declare class UpdateCommercialUseInput extends UpdateCommercialUseInput_base {
    id: string;
    status: boolean;
    price: string;
    deliveryPeriod: string;
    gigId: string;
}
export {};
