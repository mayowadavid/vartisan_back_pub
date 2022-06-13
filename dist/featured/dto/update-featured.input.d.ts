import { CreateFeaturedInput } from './create-featured.input';
declare const UpdateFeaturedInput_base: import("@nestjs/common").Type<Partial<CreateFeaturedInput>>;
export declare class UpdateFeaturedInput extends UpdateFeaturedInput_base {
    id: string;
    gigs: string;
}
export {};
