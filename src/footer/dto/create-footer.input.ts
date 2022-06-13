import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFooterInput {
  @Field()
  id: string;

  @Field({ description: 'footer name', nullable: false })
  name: string;

  @Field({ description: 'footer description' })
  description: string;

  @Field({ description: 'Menu' })
  menu: string;
}
