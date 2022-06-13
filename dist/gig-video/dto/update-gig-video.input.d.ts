import { CreateGigVideoInput } from './create-gig-video.input';
declare const UpdateGigVideoInput_base: import("@nestjs/common").Type<Partial<CreateGigVideoInput>>;
export declare class UpdateGigVideoInput extends UpdateGigVideoInput_base {
    id: string;
    name: string;
    selected: boolean;
    fileId: string;
    gigId: string;
}
export {};
