import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Footer {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'footer name', nullable: false })
  @Column()
  name: string;

  @Field({ description: 'footer description' })
  @Column()
  description: string;

  @Field({ description: 'Menu' })
  @Column()
  menu: string;
}
