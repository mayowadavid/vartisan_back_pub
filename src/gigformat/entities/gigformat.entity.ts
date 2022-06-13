import { ObjectType, Field } from '@nestjs/graphql';
import { Gig } from 'src/gig/entities/gig.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Gigformat {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'ai format name', nullable: true })
  @Column({ nullable: true })
  ai: boolean;

  @Field({ description: 'psd format name', nullable: true })
  @Column({ nullable: true })
  psd: boolean;

  @Field({ description: 'swf format name', nullable: true })
  @Column({ nullable: true })
  swf: boolean;

  @Field({ description: 'gif format name', nullable: true })
  @Column({ nullable: true })
  gif: boolean;

  @Field({ description: 'blend format name', nullable: true })
  @Column({ nullable: true })
  blend: boolean;

  @Field({ description: 'bmpr format name', nullable: true })
  @Column({ nullable: true })
  bmpr: boolean;

  @Field({ description: 'eps format name', nullable: true })
  @Column({ nullable: true })
  eps: boolean;

  @Field({ description: 'jpg format name', nullable: true })
  @Column({ nullable: true })
  jpg: boolean;

  @Field({ description: 'fig format name', nullable: true })
  @Column({ nullable: true })
  fig: boolean;

  @Field({ description: 'ico format name', nullable: true })
  @Column({ nullable: true })
  ico: boolean;

  @Field({ description: 'png format name', nullable: true })
  @Column({ nullable: true })
  png: boolean;

  @Field({ description: 'other format name', nullable: true })
  @Column({ nullable: true })
  other: boolean;

  @OneToOne(() => Gig, (gig) => gig.gigFormat)
  @Field(() => Gig, { description: 'gig format', nullable: true })
  gig: Gig;

  @Field({ description: 'gig Id', nullable: true })
  @Column({ nullable: true })
  gigId: string;
}
