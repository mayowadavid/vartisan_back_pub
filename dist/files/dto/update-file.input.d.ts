import { CreateFileInput } from './create-file.input';
declare const UpdateFileInput_base: import("@nestjs/common").Type<Partial<CreateFileInput>>;
export declare class UpdateFileInput extends UpdateFileInput_base {
    id: string;
    name: string;
    bannerId: string;
    image: string;
    audio: string;
    video: string;
    gif: string;
    document: string;
}
export {};
