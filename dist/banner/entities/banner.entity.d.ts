import { File } from 'src/files/entities/file.entity';
export declare class Banner {
    id: string;
    fileId: string;
    bannerTitle: string;
    bannerMiddleContent: string;
    bannerDescription: string;
    bannerFirstActionTitle: string;
    bannerSecondACtionTitle: string;
    file: File[];
}
