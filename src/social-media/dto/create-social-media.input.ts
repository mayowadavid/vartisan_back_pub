import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSocialMediaInput {
  @Field()
  id: string;

  @Field({ description: 'social name' })
  name: string;

  @Field({ description: 'social title' })
  title: string;
}
