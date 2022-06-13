import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHeaderInput {
  @Field({ description: 'headers id', nullable: false })
  id: string;

  @Field({ description: 'headers name', nullable: false })
  name: string;

  @Field({ description: 'headers menu', nullable: false })
  headerMenu: string;

  @Field({ description: 'headers menu id', nullable: false })
  menuId: string;
}
