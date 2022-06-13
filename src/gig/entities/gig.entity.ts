import { ObjectType, Field } from '@nestjs/graphql';
import { Category } from 'src/categories/entities/category.entity';
import { CommercialUse } from 'src/commercial-use/entities/commercial-use.entity';
import { Favorite } from 'src/favorites/entities/favorite.entity';
import { GigFaq } from 'src/gig-faq/entities/gig-faq.entity';
import { GigRequirement } from 'src/gig-requirement/entities/gig-requirement.entity';
import { GigTag } from 'src/gig-tags/entities/gig-tag.entity';
import { GigVideo } from 'src/gig-video/entities/gig-video.entity';
import { GigGallery } from 'src/gig-gallery/entities/gig-gallery.entity';
import { Gigformat } from 'src/gigformat/entities/gigformat.entity';
import { PrivateCommission } from 'src/private-commission/entities/private-commission.entity';
import { Rating } from 'src/rating/entities/rating.entity';
import { Reference } from 'src/reference/entities/reference.entity';
import { RushOrder } from 'src/rush-order/entities/rush-order.entity';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';
import { Order } from 'src/order/entities/order.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Earning } from 'src/earnings/entities/earning.entity';

export enum GigStatus {
  DRAFT = 'draft',
  PAUSED = 'paused',
  ACTIVE = 'active',
}

@ObjectType()
@Entity()
export class Gig {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'gig name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'gig description', nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field({ description: 'gig delivery period', nullable: true })
  @Column({ nullable: true })
  deliveryPeriod: string;

  @Field({ description: 'gig revision number', nullable: true })
  @Column({ nullable: true })
  numberOfRevision: string;

  @Field({ description: 'gig source file', nullable: true })
  @Column({ nullable: true })
  sourceFile: boolean;

  @Field({ description: 'gig commercial', nullable: true })
  @Column({ nullable: true })
  commercial: boolean;

  @Field({ description: 'gig ai files', nullable: true })
  @Column({ nullable: true })
  aiFiles: boolean;

  @Field({ description: 'gig ai files', nullable: true })
  @Column({ nullable: true })
  customIllustration: boolean;

  @Field({ description: 'gig file id', nullable: true })
  @Column({ nullable: true })
  fileId: string;

  @Field({ description: 'show order', nullable: true })
  @Column({ nullable: true })
  showOrder: boolean;

  @Field({ description: 'gig terms', nullable: true })
  @Column({ nullable: true })
  terms: string;

  @Field({ description: 'gig price', nullable: true })
  @Column({ nullable: true })
  amount: string;

  @Field({ description: 'gig category id', nullable: true })
  @Column({ nullable: true })
  categoryId: string;

  @Field({ description: 'gig sub category id', nullable: true })
  @Column({ nullable: true })
  subCategoryId: string;

  @Field({ description: 'gig status', nullable: true })
  @Column({ nullable: true, type: 'enum', enum: GigStatus, default: 'paused' })
  status: GigStatus;

  @Field({ description: 'gig rating Id', nullable: true })
  @Column({ nullable: true })
  ratingId: string;

  @Field({ description: 'gig gig format Id', nullable: true })
  @Column({ nullable: true })
  gigFormatId: string;

  @Field({ description: 'gig refrence Id', nullable: true })
  @Column({ nullable: true })
  favoriteId: string;

  @Field({ description: 'gig refrence Id', nullable: true })
  @Column({ nullable: true })
  referenceId: string;

  @Field({ description: 'gig default refrence', nullable: true })
  @Column({ nullable: true })
  defaultReference: string;

  @Field({ description: 'gig faq id', nullable: true })
  @Column({ nullable: true })
  gigFaqId: string;

  @Field({ description: 'gig tag id', nullable: true })
  @Column({ nullable: true })
  gigTagId: string;

  @Field({ description: 'rush order id', nullable: true })
  @Column({ nullable: true })
  rushOrderId: string;

  @Field({ description: 'gig gallery id', nullable: true })
  @Column({ nullable: true })
  gigGalleryId: string;

  @Field({ description: 'gig video id', nullable: true })
  @Column({ nullable: true })
  gigVideoId: string;

  @Field({ description: 'gig private commission id', nullable: true })
  @Column({ nullable: true })
  privateCommissionId: string;

  @Field({ description: 'gig commercial use id', nullable: true })
  @Column({ nullable: true })
  commercialUseId: string;

  @Field({ description: 'user id', nullable: true })
  @Column({ nullable: true })
  userId: string;

  @Field({ description: 'project date', nullable: true })
  @Column({ nullable: true })
  createdAt: string;

  @Field({ description: 'earning id', nullable: true })
  @Column({ nullable: true })
  earningId: string;

  @ManyToOne(() => Earning, (earning) => earning.gig)
  @Field(() => Earning, { description: 'gig purchased', nullable: true })
  earning: Earning;

  @OneToMany(() => Order, (order) => order.gig)
  @Field(() => [Order], { description: 'gig order', nullable: true })
  order: Order[];

  @OneToOne(() => RushOrder, (rushOrder) => rushOrder.gig)
  @JoinColumn()
  @Field(() => RushOrder, { description: 'rush order', nullable: true })
  rushOrder: RushOrder;

  @OneToOne(() => CommercialUse, (commercialUse) => commercialUse.gig)
  @JoinColumn()
  @Field(() => CommercialUse, { description: 'rush order', nullable: true })
  commercialUse: CommercialUse;

  @OneToOne(
    () => PrivateCommission,
    (privateCommission) => privateCommission.gig,
  )
  @JoinColumn()
  @Field(() => PrivateCommission, {
    description: 'private commission',
    nullable: true,
  })
  privateCommission: PrivateCommission;

  @ManyToOne(() => Category, (category) => category.gig)
  @JoinColumn()
  @Field(() => Category, { description: 'gig category', nullable: true })
  category: Category;

  @ManyToOne(() => User, (user) => user.gig)
  @JoinColumn()
  @Field(() => User, { description: 'user', nullable: true })
  user: User;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.gig)
  @Field(() => SubCategory, { description: 'gig category', nullable: true })
  subCategory: SubCategory;

  @OneToMany(() => Reference, (referenceGig) => referenceGig.gigReference)
  @Field(() => [Reference], { description: 'Client Reference', nullable: true })
  referenceGig: Reference[];

  @OneToMany(() => GigTag, (gigTag) => gigTag.gig, {
    cascade: true,
  })
  @Field(() => [GigTag], { description: 'Gig tag', nullable: true })
  gigTag: GigTag[];

  @OneToMany(() => Favorite, (favorite) => favorite.gig)
  @Field(() => [Favorite], { description: 'Gig favorite' })
  favorite: Favorite[];

  @OneToOne(() => Gigformat, (gigFormat) => gigFormat.gig)
  @JoinColumn()
  @Field(() => Gigformat, { description: 'gig format', nullable: true })
  gigFormat: Gigformat;

  @OneToMany(() => Rating, (rating) => rating.gig)
  @Field(() => [Rating], { description: 'Gallery rating', nullable: true })
  rating: Rating[];

  @OneToMany(() => GigFaq, (gigFaq) => gigFaq.gig)
  @Field(() => [GigFaq], { description: 'gig faq', nullable: true })
  gigFaq: GigFaq[];

  @OneToMany(() => GigRequirement, (gigRequirement) => gigRequirement.gig)
  @Field(() => [GigRequirement], {
    description: 'gig requirement',
    nullable: true,
  })
  gigRequirement: GigRequirement[];

  @OneToMany(() => GigGallery, (gigGallery) => gigGallery.gig)
  @Field(() => [GigGallery], {
    description: 'gig gallery image',
    nullable: true,
  })
  gigGallery: GigGallery[];

  @OneToMany(() => GigVideo, (gigVideo) => gigVideo.gig)
  @Field(() => [GigVideo], { description: 'gallery video', nullable: true })
  gigVideo: GigVideo[];
}
