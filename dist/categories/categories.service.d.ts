import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { FilesService } from 'src/files/files.service';
export declare class CategoriesService {
    private categoryRepository;
    private fileService;
    constructor(categoryRepository: Repository<Category>, fileService: FilesService);
    create(CategoryInput: CreateCategoryInput): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    update(id: string, updateCategoryInput: UpdateCategoryInput): Promise<Category>;
    upload(files: any, request: any, response: any): Promise<any[]>;
    remove(id: string): Promise<Category>;
}
