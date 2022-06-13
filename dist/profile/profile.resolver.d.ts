import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
export declare class ProfileResolver {
    private readonly profileService;
    constructor(profileService: ProfileService);
    createProfile(createProfileInput: CreateProfileInput): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findOne(id: string): Promise<Profile>;
    findProfileName(userName: string): Promise<Profile>;
    findUserProfile(user: any): Promise<Profile>;
    updateProfile(user: any, updateProfileInput: UpdateProfileInput): Promise<any>;
    removeProfile(id: string): Promise<Profile>;
}
