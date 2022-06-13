import { HeadersService } from './headers.service';
import { Header } from './entities/header.entity';
import { CreateHeaderInput } from './dto/create-header.input';
import { UpdateHeaderInput } from './dto/update-header.input';
export declare class HeadersResolver {
    private readonly headersService;
    constructor(headersService: HeadersService);
    createHeader(createHeaderInput: CreateHeaderInput): Promise<Header>;
    findAll(): Promise<Header[]>;
    findOne(id: string): Promise<Header>;
    updateHeader(updateHeaderInput: UpdateHeaderInput): Promise<Header>;
    removeHeader(id: string): Promise<Header>;
}
