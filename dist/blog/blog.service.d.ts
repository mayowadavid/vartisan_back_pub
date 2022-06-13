import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
export declare class BlogService {
    private blogRepository;
    private fileService;
    constructor(blogRepository: Repository<Blog>, fileService: FilesService);
    create(user: any, createBlogInput: CreateBlogInput): Promise<Blog>;
    findAll(): Promise<Blog[]>;
    findBlogByUser(user: any): Promise<Blog[]>;
    upload(files: any, request: any, user: any, response: any): Promise<any[]>;
    findOne(id: string): Promise<Blog>;
    update(id: string, updateBlogInput: UpdateBlogInput): Promise<Blog>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: string;
        description: string;
        descriptionMarkDown: string;
        status: import("./entities/blog.entity").BlogStatus;
        slug: string;
        categoryId: string;
        fileId: string;
        commentId: string;
        userId: string;
        user: import("../users/entities/user.entity").User;
        category: import("../categories/entities/category.entity").Category[];
        file: import("../files/entities/file.entity").File;
        comments: import("../comments/entities/comment.entity").Comment[];
    }>;
}
