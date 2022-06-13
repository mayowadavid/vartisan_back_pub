import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGigTagInput {
  @Field({ description: 'tag name', nullable: true })
  name: string;

  @Field({ description: 'gig id', nullable: true })
  gigId: string;
}
