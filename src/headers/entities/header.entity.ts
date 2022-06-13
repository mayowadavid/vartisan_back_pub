import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Menu } from 'src/menu/entities/menu.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Header {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'headers name', nullable: false })
  @Column()
  name: string;

  @Field({ description: 'headers menu', nullable: false })
  @Column()
  headerMenu: string;

  @ManyToOne(() => Menu, (menu) => menu.header)
  @Field(() => [Menu])
  menu: Menu[];

  @Field()
  @Column()
  menuId: string;
}
