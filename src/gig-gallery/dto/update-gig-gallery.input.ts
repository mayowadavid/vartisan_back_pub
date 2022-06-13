import { CreateGigGalleryInput } from './create-gig-gallery.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGigGalleryInput extends PartialType(CreateGigGalleryInput) {
  @Field()
  id: string;

  @Field({ description: 'gig name', nullable: true })
  name: string;

  @Field({ description: 'gig gallery', nullable: true })
  selected: boolean;

  @Field({ description: 'fileId', nullable: true })
  fileId: string;

  @Field({ description: 'gig Id', nullable: true })
  gigId: string;
}
