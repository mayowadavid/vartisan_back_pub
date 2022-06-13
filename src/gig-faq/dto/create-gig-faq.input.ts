import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGigFaqInput {
  @Field({ description: 'faq name', nullable: true })
  name: string;

  @Field({ description: 'faq description', nullable: true })
  description: string;

  @Field({ description: 'gig faq id', nullable: true })
  gigId: string;
}
