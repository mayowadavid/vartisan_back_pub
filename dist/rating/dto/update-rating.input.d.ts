import { CreateRatingInput } from './create-rating.input';
declare const UpdateRatingInput_base: import("@nestjs/common").Type<Partial<CreateRatingInput>>;
export declare class UpdateRatingInput extends UpdateRatingInput_base {
    id: string;
    thumbsUp: string;
    thumbsDown: string;
    reviews: string;
    gigId: string;
}
export {};
