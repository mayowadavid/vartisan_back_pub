import { CreateGigInput } from './dto/create-gig.input';
import { UpdateGigInput } from './dto/update-gig.input';
import { Repository } from 'typeorm';
import { Gig } from './entities/gig.entity';
export declare class GigService {
    private gigRepository;
    constructor(gigRepository: Repository<Gig>);
    create(user: any, createGigInput: CreateGigInput): Promise<Gig>;
    findAll(): Promise<Gig[]>;
    findOne(id: string): Promise<Gig>;
    findGigByUser(name: string, userName: string): Promise<Gig>;
    findAllUserGig(user: any): Promise<Gig[]>;
    update(id: string, updateGigInput: UpdateGigInput): Promise<Gig>;
    remove(id: string): Promise<any>;
}
