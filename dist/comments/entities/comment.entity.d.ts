import { Blog } from 'src/blog/entities/blog.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Comment {
    id: string;
    description: string;
    createdAt: string;
    blogId: string;
    userId: string;
    user: User;
    blog: Blog;
}
