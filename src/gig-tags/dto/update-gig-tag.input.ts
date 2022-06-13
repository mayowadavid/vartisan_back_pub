import { CreateGigTagInput } from './create-gig-tag.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGigTagInput extends PartialType(CreateGigTagInput) {
  @Field()
  id: string;

  @Field({ description: 'tag name', nullable: true })
  name: string;

  @Field({ description: 'gig id', nullable: true })
  gigId: string;
}
