import { CreateGigInput } from './create-gig.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { GigStatus } from '../entities/gig.entity';

@InputType()
export class UpdateGigInput extends PartialType(CreateGigInput) {
  @Field()
  id: string;

  @Field({ description: 'gig name', nullable: true })
  name: string;

  @Field({ description: 'gig description', nullable: true })
  description: string;

  @Field({ description: 'gig delivery period', nullable: true })
  deliveryPeriod: string;

  @Field({ description: 'gig revision number', nullable: true })
  numberOfRevision: string;

  @Field({ description: 'gig revision number', nullable: true })
  sourceFile: boolean;

  @Field({ description: 'gig commercial', nullable: true })
  commercial: boolean;

  @Field({ description: 'gig ai files', nullable: true })
  aiFiles: boolean;

  @Field({ description: 'gig ai files', nullable: true })
  customIllustration: boolean;

  @Field({ description: 'video gallery id', nullable: true })
  galleryVideoId: string;

  @Field({ description: 'image gallery id', nullable: true })
  galleryImageId: string;

  @Field({ description: 'gig file id', nullable: true })
  fileId: string;

  @Field({ description: 'show order', nullable: true })
  showOrder: boolean;

  @Field({ description: 'gig terms', nullable: true })
  terms: string;

  @Field({ description: 'gig price', nullable: true })
  amount: string;

  @Field({ description: 'gig category id', nullable: true })
  categoryId: string;

  @Field({ description: 'gig sub category id', nullable: true })
  subCategoryId: string;

  @Field({ description: 'gig sub category id', nullable: true })
  status: GigStatus;

  @Field({ description: 'gig rating Id', nullable: true })
  ratingId: string;

  @Field({ description: 'gig gig format Id', nullable: true })
  gigFormatId: string;

  @Field({ description: 'gig tag id', nullable: true })
  gigTagId: string;

  @Field({ description: 'rush order id', nullable: true })
  rushOrderId: string;

  @Field({ description: 'gig private commission id', nullable: true })
  privateCommissionId: string;

  @Field({ description: 'gig commercial use id', nullable: true })
  commercialUseId: string;

  @Field({ description: 'user id', nullable: true })
  userId: string;

  @Field({ description: 'project date', nullable: true })
  createdAt: string;

  @Field({ description: 'gig refrence Id', nullable: true })
  favoriteId: string;

  @Field({ description: 'gig refrence Id', nullable: true })
  referenceId: string;

  @Field({ description: 'gig default reference', nullable: true })
  defaultReference: string;

  @Field({ description: 'gig faq id', nullable: true })
  gigFaqId: string;

  @Field({ description: 'gig video id', nullable: true })
  gigVideoId: string;

  @Field({ description: 'gig gallery id', nullable: true })
  gigGalleryId: string;

  @Field({ description: 'earning id', nullable: true })
  earningId: string;
}
