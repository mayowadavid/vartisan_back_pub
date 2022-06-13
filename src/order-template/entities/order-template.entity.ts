import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class OrderTemplate {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'user message' })
  @Column()
  user: string;

  @Field({ description: 'date' })
  @Column()
  date: string;

  @Field({ description: 'revision' })
  @Column()
  revision: string;

  @Field({ description: 'order status' })
  @Column()
  orderStatus: string;

  @Field({ description: 'order amount' })
  @Column()
  amount: string;

  @Field({ description: 'order count' })
  @Column()
  orderCount: string;

  @Field({ description: 'order source file' })
  @Column()
  sourceFile: boolean;

  @Field({ description: 'commercial order' })
  @Column()
  commercial: boolean;

  @Field({ description: 'rush order' })
  @Column()
  rushOrder: boolean;

  @Field({ description: 'order end' })
  @Column()
  end: string;
}
