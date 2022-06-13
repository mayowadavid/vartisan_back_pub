import { CreateHomeFaqInput } from './create-home-faq.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHomeFaqInput extends PartialType(CreateHomeFaqInput) {
  @Field()
  id: string;

  @Field({ description: 'faq name', nullable: true })
  name: string;

  @Field({ description: 'faq description', nullable: true })
  description: string;
}
