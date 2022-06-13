import { File } from 'src/files/entities/file.entity';
import { Gig } from 'src/gig/entities/gig.entity';
export declare class GigVideo {
    id: string;
    name: string;
    selected: boolean;
    fileId: string;
    gigId: string;
    gig: Gig;
    file: File[];
}
