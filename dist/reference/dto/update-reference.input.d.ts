import { CreateReferenceInput } from './create-reference.input';
declare const UpdateReferenceInput_base: import("@nestjs/common").Type<Partial<CreateReferenceInput>>;
export declare class UpdateReferenceInput extends UpdateReferenceInput_base {
    id: string;
    name: string;
    selected: boolean;
    description: string;
    fileId: string;
    gigReferenceId: string;
    userId: string;
}
export {};
