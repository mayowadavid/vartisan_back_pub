import { CreateGigformatInput } from './create-gigformat.input';
declare const UpdateGigformatInput_base: import("@nestjs/common").Type<Partial<CreateGigformatInput>>;
export declare class UpdateGigformatInput extends UpdateGigformatInput_base {
    id: string;
    ai: boolean;
    psd: boolean;
    swf: boolean;
    gif: boolean;
    blend: boolean;
    bmpr: boolean;
    eps: boolean;
    jpg: boolean;
    fig: boolean;
    ico: boolean;
    png: boolean;
    other: boolean;
    gigId: string;
}
export {};
