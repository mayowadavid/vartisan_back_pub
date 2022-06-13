import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHomeFaqInput {
  @Field({ description: 'faq name', nullable: true })
  name: string;

  @Field({ description: 'faq description', nullable: true })
  description: string;
}
