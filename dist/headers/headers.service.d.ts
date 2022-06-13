import { CreateHeaderInput } from './dto/create-header.input';
import { UpdateHeaderInput } from './dto/update-header.input';
import { Header } from './entities/header.entity';
import { Repository } from 'typeorm';
export declare class HeadersService {
    private headersRepository;
    constructor(headersRepository: Repository<Header>);
    create(createHeaderInput: CreateHeaderInput): Promise<Header>;
    findAll(): Promise<Header[]>;
    findOne(id: string): Promise<Header>;
    update(id: string, updateHeaderInput: UpdateHeaderInput): Promise<Header>;
    remove(id: string): Promise<Header>;
}
