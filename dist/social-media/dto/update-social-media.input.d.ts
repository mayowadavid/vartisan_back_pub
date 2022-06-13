import { CreateSocialMediaInput } from './create-social-media.input';
declare const UpdateSocialMediaInput_base: import("@nestjs/common").Type<Partial<CreateSocialMediaInput>>;
export declare class UpdateSocialMediaInput extends UpdateSocialMediaInput_base {
    id: string;
    name: string;
    title: string;
}
export {};
