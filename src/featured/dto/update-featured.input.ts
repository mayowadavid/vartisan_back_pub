import { CreateFeaturedInput } from './create-featured.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFeaturedInput extends PartialType(CreateFeaturedInput) {
  @Field()
  id: string;

  @Field({ description: 'featured services' })
  gigs: string;
}
