import { CreateFaqImageInput } from './create-faq-image.input';
declare const UpdateFaqImageInput_base: import("@nestjs/common").Type<Partial<CreateFaqImageInput>>;
export declare class UpdateFaqImageInput extends UpdateFaqImageInput_base {
    id: string;
    fileId: string;
}
export {};
