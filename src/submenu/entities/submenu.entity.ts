import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Menu } from 'src/menu/entities/menu.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Submenu {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'menu name', nullable: false })
  @Column()
  name: string;

  @Field({ description: 'menu url', nullable: false })
  @Column()
  menuUrl: string;

  @Field({ description: 'menu id', nullable: false })
  @Column()
  menuId: string;

  @ManyToMany(() => Menu, (menu) => menu.submenu)
  @Field(() => Menu, { nullable: true })
  menu: Menu;
}
