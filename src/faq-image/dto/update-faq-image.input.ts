import { CreateFaqImageInput } from './create-faq-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFaqImageInput extends PartialType(CreateFaqImageInput) {
  @Field()
  id: string;

  @Field({ description: 'fileId', nullable: true })
  fileId: string;
}
