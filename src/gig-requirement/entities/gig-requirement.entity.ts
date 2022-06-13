import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Gig } from 'src/gig/entities/gig.entity';

@ObjectType()
@Entity()
export class GigRequirement {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'requirement name', nullable: true })
  @Column({ nullable: true })
  requirementName: string;

  @Field({ description: 'requirement creation date', nullable: true })
  @Column({ nullable: true })
  date: string;

  @Field({ description: 'required faq', nullable: true })
  @Column({ nullable: true })
  required: boolean;

  @Field({ description: 'faq text', nullable: true })
  @Column({ nullable: true })
  text: boolean;

  @Field({ description: 'faq link url', nullable: true })
  @Column({ nullable: true })
  link: boolean;

  @Field({ description: 'faq gig id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @ManyToOne(() => Gig, (gig) => gig.gigFaq)
  @Field(() => Gig, { description: 'Gig favorite' })
  gig: Gig;
}
