import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Gig } from 'src/gig/entities/gig.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class GigFaq {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'faq name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'faq description', nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field({ description: 'gig faq id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @ManyToOne(() => Gig, (gig) => gig.gigFaq)
  @Field(() => Gig, { description: 'Gig faq' })
  gig: Gig;
}
