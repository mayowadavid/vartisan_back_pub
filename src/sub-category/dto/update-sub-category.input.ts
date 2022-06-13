import { CreateSubCategoryInput } from './create-sub-category.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { categoryStatus } from 'src/sub-category/entities/sub-category.entity';
@InputType()
export class UpdateSubCategoryInput extends PartialType(
  CreateSubCategoryInput,
) {
  @Field()
  id: string;

  @Field({ description: 'category name', nullable: true })
  name: string;

  @Field({ description: 'category description', nullable: true })
  description: string;

  @Field({ description: 'category status', nullable: true })
  status: categoryStatus;

  @Field({ description: 'gig id', nullable: true })
  gigId: string;

  @Field({ description: 'category id', nullable: true })
  categoryId: string;
}
