import { CreateGigVideoInput } from './create-gig-video.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGigVideoInput extends PartialType(CreateGigVideoInput) {
  @Field()
  id: string;

  @Field({ description: 'gig name', nullable: true })
  name: string;

  @Field({ description: 'gig default video', nullable: true })
  selected: boolean;

  @Field({ description: 'fileId', nullable: true })
  fileId: string;

  @Field({ description: 'gig Id', nullable: true })
  gigId: string;
}
