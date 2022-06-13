import { CreateFavoriteInput } from './create-favorite.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFavoriteInput extends PartialType(CreateFavoriteInput) {
  @Field()
  id: string;

  @Field({ description: 'name of gigs' })
  gigs: string;

  @Field({ description: 'gig id' })
  gigId: string;

  @Field({ description: 'userId' })
  userid: string;
}
