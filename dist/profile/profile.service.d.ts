import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { FilesService } from 'src/files/files.service';
export declare class ProfileService {
    private profileRepository;
    private fileService;
    constructor(profileRepository: Repository<Profile>, fileService: FilesService);
    create(createProfileInput: CreateProfileInput): Promise<Profile>;
    findUserProfile(user: any): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    upload(files: any, request: any, user: any, response: any): Promise<any[]>;
    findProfileName(userName: any): Promise<Profile>;
    findOne(id: string): Promise<Profile>;
    update(user: any, updateProfileInput: UpdateProfileInput): Promise<any>;
    remove(id: string): Promise<Profile>;
}
