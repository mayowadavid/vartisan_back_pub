import { ObjectType, Field } from '@nestjs/graphql';
import { File } from 'src/files/entities/file.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity()
export class GigVideo {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'gig name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'gig name', nullable: true })
  @Column({ nullable: true })
  selected: boolean;

  @Field({ description: 'fileId', nullable: true })
  @Column({ nullable: true })
  fileId: string;

  @Field({ description: 'gig Id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @ManyToOne(() => Gig, (gig) => gig.gigVideo)
  @Field(() => Gig, { description: 'gallery video' })
  gig: Gig;

  @OneToMany(() => File, (file) => file.gigVideo)
  @Field(() => [File], { description: 'gig video' })
  file: File[];
}
