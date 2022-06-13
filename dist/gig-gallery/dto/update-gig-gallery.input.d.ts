import { CreateGigGalleryInput } from './create-gig-gallery.input';
declare const UpdateGigGalleryInput_base: import("@nestjs/common").Type<Partial<CreateGigGalleryInput>>;
export declare class UpdateGigGalleryInput extends UpdateGigGalleryInput_base {
    id: string;
    name: string;
    selected: boolean;
    fileId: string;
    gigId: string;
}
export {};
