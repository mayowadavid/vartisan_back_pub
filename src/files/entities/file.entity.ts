import { ObjectType, Field } from '@nestjs/graphql';
import { Gig } from 'src/gig/entities/gig.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { Reference } from 'src/reference/entities/reference.entity';
import { Message } from 'src/messages/entities/message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Blog } from 'src/blog/entities/blog.entity';
import { Banner } from 'src/banner/entities/banner.entity';
import { FaqImage } from 'src/faq-image/entities/faq-image.entity';
import { Category } from 'src/categories/entities/category.entity';
import { GigVideo } from 'src/gig-video/entities/gig-video.entity';
import { GigGallery } from 'src/gig-gallery/entities/gig-gallery.entity';
import { OrderRequirement } from 'src/order-requirement/entities/order-requirement.entity';

@ObjectType()
@Entity()
export class File {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'image', nullable: true })
  @Column({ nullable: true })
  image: string;

  @Field({ description: 'url', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'audio', nullable: true })
  @Column({ nullable: true })
  audio: string;

  @Field({ description: 'video', nullable: true })
  @Column({ nullable: true })
  video: string;

  @Field({ description: 'GIF', nullable: true })
  @Column({ nullable: true })
  gif: string;

  @Field({ description: 'documents', nullable: true })
  @Column({ nullable: true })
  document: string;

  @Field({ description: 'messagId', nullable: true })
  @Column({ nullable: true })
  messageId: string;

  @OneToOne(
    () => OrderRequirement,
    (orderRequirement) => orderRequirement.descriptionFile,
  )
  @Field(() => OrderRequirement, {
    description: 'order description file',
    nullable: true,
  })
  descriptionFile: OrderRequirement;

  @OneToOne(
    () => OrderRequirement,
    (orderRequirement) => orderRequirement.referenceFile,
  )
  @Field(() => OrderRequirement, {
    description: 'order reference file',
    nullable: true,
  })
  referenceFile: OrderRequirement;

  @OneToOne(
    () => OrderRequirement,
    (orderRequirement) => orderRequirement.colorFile,
  )
  @Field(() => OrderRequirement, {
    description: 'order color file',
    nullable: true,
  })
  colorFile: OrderRequirement;

  @OneToOne(() => Profile, (profileImage) => profileImage.file)
  @Field(() => Profile, { description: 'profile image', nullable: true })
  profileImage: Profile;

  @Field({ description: 'banner id', nullable: true })
  @Column({ nullable: true })
  bannerId: string;

  @ManyToOne(() => FaqImage, (faqImage) => faqImage.file)
  @Field(() => FaqImage, { description: 'home faq', nullable: true })
  faqImage: FaqImage;

  @ManyToOne(() => GigVideo, (gigVideo) => gigVideo.file)
  @Field(() => GigVideo, { description: 'Gig Video', nullable: true })
  gigVideo: GigVideo;

  @ManyToOne(() => GigGallery, (gigGallery) => gigGallery.file)
  @Field(() => GigGallery, { description: 'Gig Gallery', nullable: true })
  gigGallery: GigGallery;

  @OneToOne(() => Reference, (clientReference) => clientReference.file)
  @Field(() => Reference, { description: 'Client Reference', nullable: true })
  clientReference: Reference;

  @OneToOne(() => Category, (category) => category.file)
  @Field(() => Category, { description: 'category file', nullable: true })
  category: Category;

  @ManyToOne(() => Message, (message) => message.file)
  @Field(() => Message, { description: 'Chat files', nullable: true })
  message: Message;

  @ManyToOne(() => Banner, (banner) => banner.file)
  @Field(() => Banner, { description: 'banner Image', nullable: true })
  banner: Banner;

  @ManyToOne(() => Blog, (blog) => blog.file)
  @Field(() => Blog, { description: 'Blog files', nullable: true })
  blog: Blog;
}
