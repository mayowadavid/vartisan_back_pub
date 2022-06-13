import { ObjectType, Field } from '@nestjs/graphql';
import { File } from 'src/files/entities/file.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class FaqImage {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => File, (file) => file.faqImage)
  @Field(() => [File], { description: 'faq file' })
  file: File[];

  @Field({ description: 'fileId' })
  @Column({ nullable: true })
  fileId: string;
}
