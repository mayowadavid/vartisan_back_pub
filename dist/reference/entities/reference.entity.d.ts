import { File } from 'src/files/entities/file.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Reference {
    id: string;
    name: string;
    description: string;
    selected: boolean;
    fileId: string;
    userId: string;
    gigReferenceId: string;
    user: User;
    file: File;
    gigReference: Gig;
}
