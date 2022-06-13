import { ObjectType, Field } from '@nestjs/graphql';
import { Category } from 'src/categories/entities/category.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

export enum categoryStatus {
  DRAFT = 'draft',
  PAUSED = 'paused',
  ACTIVE = 'active',
}

@ObjectType()
@Entity()
export class SubCategory {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'category name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'category description', nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field({ description: 'subcategory status', nullable: true })
  @Column({
    nullable: true,
    type: 'enum',
    enum: categoryStatus,
    default: 'draft',
  })
  status: categoryStatus;

  @Field({ description: 'category id', nullable: true })
  @Column({ nullable: true })
  categoryId: string;

  @Field({ description: 'gig id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @ManyToOne(() => Category, (category) => category.subCategory, {
    onDelete: 'CASCADE',
  })
  @Field(() => Category, { description: 'subCategory', nullable: true })
  category: Category;

  @OneToMany(() => Gig, (gig) => gig.subCategory)
  @Field(() => [Gig], { description: 'gig', nullable: true })
  gig: Gig[];
}
