import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Gig } from 'src/gig/entities/gig.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class GigTag {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'tag name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'gig id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @ManyToOne(() => Gig, (gig) => gig.gigTag)
  @Field(() => Gig, { description: 'Gig tags' })
  gig: Gig;
}
