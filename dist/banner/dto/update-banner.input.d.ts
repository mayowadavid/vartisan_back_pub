import { CreateBannerInput } from './create-banner.input';
declare const UpdateBannerInput_base: import("@nestjs/common").Type<Partial<CreateBannerInput>>;
export declare class UpdateBannerInput extends UpdateBannerInput_base {
    id: string;
    bannerTitle: string;
    bannerDescription: string;
    bannerMiddleContent: string;
    bannerFirstActionTitle: string;
    bannerSecondACtionTitle: string;
    fileId: string;
}
export {};
