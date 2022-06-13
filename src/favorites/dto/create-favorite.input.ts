import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFavoriteInput {
  @Field()
  id: string;

  @Field({ description: 'name of gigs' })
  gigs: string;

  @Field({ description: 'gig id' })
  gigId: string;

  @Field({ description: 'userId' })
  userid: string;
}
