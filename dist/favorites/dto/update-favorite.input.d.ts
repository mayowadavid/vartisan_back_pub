import { CreateFavoriteInput } from './create-favorite.input';
declare const UpdateFavoriteInput_base: import("@nestjs/common").Type<Partial<CreateFavoriteInput>>;
export declare class UpdateFavoriteInput extends UpdateFavoriteInput_base {
    id: string;
    gigs: string;
    gigId: string;
    userid: string;
}
export {};
