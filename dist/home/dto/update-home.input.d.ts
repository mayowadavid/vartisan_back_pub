import { CreateHomeInput } from './create-home.input';
declare const UpdateHomeInput_base: import("@nestjs/common").Type<Partial<CreateHomeInput>>;
export declare class UpdateHomeInput extends UpdateHomeInput_base {
    id: string;
    siteName: string;
    logoUrl: string;
    bannerImageId: string;
    bannerTitle: string;
    bannerDescription: string;
    bannerFirstACtionTitle: string;
    bannerSecondACtionTitle: string;
    showCategory: boolean;
    homeFaqId: string;
    showFeatured: boolean;
    showLatest: boolean;
    showProcess: boolean;
    showFaq: boolean;
    showOptin: boolean;
    headerId: string;
}
export {};
