import { ObjectType, Field } from '@nestjs/graphql';
import { Gig } from 'src/gig/entities/gig.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Rating {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'rating up' })
  @Column()
  thumbsUp: string;

  @Field({ description: 'rating down' })
  @Column()
  thumbsDown: string;

  @Field({ description: 'reviews' })
  @Column()
  reviews: string;

  @ManyToOne(() => Gig, (gig) => gig.rating)
  @Field(() => [Gig], { description: 'Gig Rating' })
  gig: Gig[];

  @Field({ description: 'gig id' })
  @Column()
  gigId: string;
}
