import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from 'src/comments/entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentsService {
    private commentRepository;
    constructor(commentRepository: Repository<Comment>);
    create(createCommentInput: CreateCommentInput): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findOne(id: string): Promise<Comment>;
    update(id: string, updateCommentInput: UpdateCommentInput): Promise<Comment>;
    remove(id: string): Promise<Comment>;
}
