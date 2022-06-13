import { ObjectType, Field } from '@nestjs/graphql';
import { File } from 'src/files/entities/file.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Banner {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'file id', nullable: true })
  @Column({ nullable: true })
  fileId: string;

  @Field({ description: 'bannerTitle', nullable: true })
  @Column({ nullable: true })
  bannerTitle: string;

  @Field({ description: 'bannerMiddleContent', nullable: true })
  @Column({ nullable: true })
  bannerMiddleContent: string;

  @Field({ description: 'bannerDescription', nullable: true })
  @Column({ nullable: true })
  bannerDescription: string;

  @Field({ description: 'bannerFirstACtionTitle', nullable: true })
  @Column({ nullable: true })
  bannerFirstActionTitle: string;

  @Field({ description: 'bannerSecondACtionTitle', nullable: true })
  @Column({ nullable: true })
  bannerSecondACtionTitle: string;

  @OneToMany(() => File, (file) => file.banner)
  @Field(() => [File], { description: 'bannerImage', nullable: true })
  file: File[];
}
