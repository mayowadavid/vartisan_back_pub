import { CreateRatingInput } from './create-rating.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRatingInput extends PartialType(CreateRatingInput) {
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
