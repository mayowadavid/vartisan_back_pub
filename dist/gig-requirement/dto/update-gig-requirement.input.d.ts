import { CreateGigRequirementInput } from './create-gig-requirement.input';
declare const UpdateGigRequirementInput_base: import("@nestjs/common").Type<Partial<CreateGigRequirementInput>>;
export declare class UpdateGigRequirementInput extends UpdateGigRequirementInput_base {
    id: string;
    requirementName: string;
    required: boolean;
    text: boolean;
    link: boolean;
    gigId: string;
}
export {};
