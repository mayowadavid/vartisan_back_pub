import { ObjectType, Field } from '@nestjs/graphql';
import { Blog } from 'src/blog/entities/blog.entity';
import { File } from 'src/files/entities/file.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';

export enum categoryStatus {
  DRAFT = 'draft',
  PAUSED = 'paused',
  ACTIVE = 'active',
}

@ObjectType()
@Entity()
export class Category {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'category name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'category description', nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field({ description: 'category status', nullable: true })
  @Column({
    nullable: true,
    type: 'enum',
    enum: categoryStatus,
    default: 'draft',
  })
  status: categoryStatus;

  @Field({ description: 'display banner', nullable: true })
  @Column({ nullable: true })
  displayBanner: boolean;

  @Field({ description: 'sub category id', nullable: true })
  @Column({ nullable: true })
  subCategoryId: string;

  @Field({ description: 'gig id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @Field({ description: 'blog id', nullable: true })
  @Column({ nullable: true })
  blogId: string;

  @ManyToOne(() => Blog, (blog) => blog.category)
  @Field(() => Blog, { description: 'blog category', nullable: true })
  blog: Blog;

  @OneToOne(() => File, (file) => file.category)
  @JoinColumn()
  @Field(() => File, { description: 'category image', nullable: true })
  file: File;

  @OneToMany(() => Gig, (gig) => gig.category)
  @Field(() => [Gig], { description: 'parent category', nullable: true })
  gig: Gig[];

  @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
  @Field(() => [Category], { description: 'parent category', nullable: true })
  subCategory: Category[];
}
