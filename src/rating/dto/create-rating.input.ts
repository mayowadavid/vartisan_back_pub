import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRatingInput {
  @Field()
  id: string;

  @Field({ description: 'rating up' })
  thumbsUp: string;

  @Field({ description: 'rating down' })
  thumbsDown: string;

  @Field({ description: 'reviews' })
  reviews: string;

  @Field({ description: 'gig id' })
  gigId: string;
}
