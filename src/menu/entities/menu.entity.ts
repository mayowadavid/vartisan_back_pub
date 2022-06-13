import { ObjectType, Field } from '@nestjs/graphql';
import { Header } from 'src/headers/entities/header.entity';
import { Submenu } from 'src/submenu/entities/submenu.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@ObjectType()
@Entity()
export class Menu {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'menu name', nullable: false })
  @Column()
  name: string;

  @Field({ description: 'menu url', nullable: false })
  @Column()
  menuUrl: string;

  @OneToMany(() => Header, (header) => header.menu)
  @Field(() => Header)
  header: Header;

  @Field({ description: 'header id', nullable: false })
  @Column()
  headerId: string;

  @ManyToMany(() => Submenu, (submenu) => submenu.menu)
  @Field(() => [Submenu])
  submenu: Submenu[];

  @Field({ description: 'subMenu id', nullable: false })
  @Column()
  subMenuId: string;
}
