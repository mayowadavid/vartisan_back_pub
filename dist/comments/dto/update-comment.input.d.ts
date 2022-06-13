import { CreateCommentInput } from './create-comment.input';
declare const UpdateCommentInput_base: import("@nestjs/common").Type<Partial<CreateCommentInput>>;
export declare class UpdateCommentInput extends UpdateCommentInput_base {
    id: string;
    description: string;
    createdAt: string;
    blogId: string;
    userId: string;
}
export {};
