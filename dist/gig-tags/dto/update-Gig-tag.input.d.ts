import { CreateGigTagInput } from './create-gig-tag.input';
declare const UpdateGigTagInput_base: import("@nestjs/common").Type<Partial<CreateGigTagInput>>;
export declare class UpdateGigTagInput extends UpdateGigTagInput_base {
    id: string;
    name: string;
    gigId: string;
}
export {};
