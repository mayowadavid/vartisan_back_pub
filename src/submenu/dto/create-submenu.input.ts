import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubmenuInput {
  @Field()
  id: string;

  @Field({ description: 'menu name', nullable: false })
  name: string;

  @Field({ description: 'menu url', nullable: false })
  menuUrl: string;

  @Field({ description: 'menu id', nullable: false })
  menuId: string;
}
