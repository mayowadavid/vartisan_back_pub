import { Profile } from 'src/profile/entities/profile.entity';
import { Reference } from 'src/reference/entities/reference.entity';
import { Message } from 'src/messages/entities/message.entity';
import { Blog } from 'src/blog/entities/blog.entity';
import { Banner } from 'src/banner/entities/banner.entity';
import { FaqImage } from 'src/faq-image/entities/faq-image.entity';
import { Category } from 'src/categories/entities/category.entity';
import { GigVideo } from 'src/gig-video/entities/gig-video.entity';
import { GigGallery } from 'src/gig-gallery/entities/gig-gallery.entity';
import { OrderRequirement } from 'src/order-requirement/entities/order-requirement.entity';
export declare class File {
    id: string;
    image: string;
    name: string;
    audio: string;
    video: string;
    gif: string;
    document: string;
    messageId: string;
    descriptionFile: OrderRequirement;
    referenceFile: OrderRequirement;
    colorFile: OrderRequirement;
    profileImage: Profile;
    bannerId: string;
    faqImage: FaqImage;
    gigVideo: GigVideo;
    gigGallery: GigGallery;
    clientReference: Reference;
    category: Category;
    message: Message;
    banner: Banner;
    blog: Blog;
}