import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFeaturedInput {
  @Field()
  id: string;

  @Field({ description: 'featured services' })
  gigs: string;
}
