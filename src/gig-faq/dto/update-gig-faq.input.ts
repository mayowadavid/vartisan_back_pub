import { CreateGigFaqInput } from './create-gig-faq.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGigFaqInput extends PartialType(CreateGigFaqInput) {
  @Field()
  id: string;

  @Field({ description: 'faq name', nullable: true })
  name: string;

  @Field({ description: 'faq description', nullable: true })
  description: string;

  @Field({ description: 'gig faq id', nullable: true })
  gigId: string;
}
