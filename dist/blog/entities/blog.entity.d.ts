import { Category } from 'src/categories/entities/category.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { File } from 'src/files/entities/file.entity';
import { User } from 'src/users/entities/user.entity';
export declare enum BlogStatus {
    DRAFT = "draft",
    PAUSED = "paused",
    ACTIVE = "active"
}
export declare class Blog {
    id: string;
    name: string;
    createdAt: string;
    description: string;
    descriptionMarkDown: string;
    status: BlogStatus;
    slug: string;
    categoryId: string;
    fileId: string;
    commentId: string;
    userId: string;
    user: User;
    category: Category[];
    file: File;
    comments: Comment[];
}
