import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { File } from 'src/files/entities/file.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
@Entity()
export class Reference {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'reference name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'reference description', nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field({ description: 'reference default', nullable: true })
  @Column({ nullable: true })
  selected: boolean;

  @Field({ description: 'reference id', nullable: true })
  @Column({ nullable: true })
  fileId: string;

  @Field({ description: 'gig reference id', nullable: true })
  @Column({ nullable: true })
  userId: string;

  @Field({ description: 'gig reference id', nullable: true })
  @Column({ nullable: true })
  gigReferenceId: string;

  @ManyToOne(() => User, (user) => user.reference)
  @Field(() => User, { description: 'user Reference', nullable: true })
  user: User;

  @OneToOne(() => File, (file) => file.clientReference)
  @JoinColumn()
  @Field(() => File, { description: 'Client Reference', nullable: true })
  file: File;

  @ManyToOne(() => Gig, (gigReference) => gigReference.referenceGig)
  @Field(() => Gig, { description: 'gig format', nullable: true })
  gigReference: Gig;
}
