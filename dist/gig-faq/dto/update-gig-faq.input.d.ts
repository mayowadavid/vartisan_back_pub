import { CreateGigFaqInput } from './create-gig-faq.input';
declare const UpdateGigFaqInput_base: import("@nestjs/common").Type<Partial<CreateGigFaqInput>>;
export declare class UpdateGigFaqInput extends UpdateGigFaqInput_base {
    id: string;
    name: string;
    description: string;
    gigId: string;
}
export {};
