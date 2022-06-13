import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFaqImageInput {
  @Field()
  id: string;

  @Field({ description: 'fileId', nullable: true })
  fileId: string;
}
