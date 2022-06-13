import { ObjectType, Field } from '@nestjs/graphql';
import { Header } from 'src/headers/entities/header.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Home {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'site name', nullable: true })
  @Column({ nullable: true })
  siteName: string;

  @Field({ description: 'logo', nullable: true })
  @Column({ nullable: true })
  logoUrl: string;

  @Field({ description: 'display Category', nullable: true })
  @Column({ nullable: true })
  showCategory: boolean;

  @Field({ description: 'display featured category', nullable: true })
  @Column({ nullable: true })
  showFeatured: boolean;

  @Field({ description: 'display latest delivery', nullable: true })
  @Column({ nullable: true })
  showLatest: boolean;

  @Field({ description: 'display site process', nullable: true })
  @Column({ nullable: true })
  showProcess: boolean;

  @Field({ description: 'display site faq', nullable: true })
  @Column({ nullable: true })
  showFaq: boolean;

  @Field({ description: 'display site optin', nullable: true })
  @Column({ nullable: true })
  showOptin: boolean;

  @OneToMany(() => Header, (header) => header.menu)
  @Field(() => Header, { nullable: true })
  header: Header;

  @Field({ description: 'headerId', nullable: true })
  @Column({ nullable: true })
  headerId: string;
}
