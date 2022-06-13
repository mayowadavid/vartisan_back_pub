import { CreateComplaintInput } from './create-complaint.input';
declare const UpdateComplaintInput_base: import("@nestjs/common").Type<Partial<CreateComplaintInput>>;
export declare class UpdateComplaintInput extends UpdateComplaintInput_base {
    id: string;
    user: string;
    description: string;
}
export {};
