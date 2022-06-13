import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { categoryStatus } from 'src/sub-category/entities/sub-category.entity';
@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field()
  id: string;

  @Field({ description: 'category name', nullable: true })
  name: string;

  @Field({ description: 'category description', nullable: true })
  description: string;

  @Field({ description: 'category status', nullable: true })
  status: categoryStatus;

  @Field({ description: 'display banner', nullable: true })
  displayBanner: boolean;

  @Field({ description: 'sub category id', nullable: true })
  subCategoryId: string;

  @Field({ description: 'gig id', nullable: true })
  gigId: string;

  @Field({ description: 'blog id', nullable: true })
  blogId: string;
}
