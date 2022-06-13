import { CreateSocialMediaInput } from './create-social-media.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSocialMediaInput extends PartialType(
  CreateSocialMediaInput,
) {
  @Field()
  id: string;

  @Field({ description: 'social name' })
  name: string;

  @Field({ description: 'social title' })
  title: string;
}
