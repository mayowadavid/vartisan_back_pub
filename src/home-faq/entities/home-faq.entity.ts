import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class HomeFaq {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'faq name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'faq description', nullable: true })
  @Column({ nullable: true })
  description: string;
}
