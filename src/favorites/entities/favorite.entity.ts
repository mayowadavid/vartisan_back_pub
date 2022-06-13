import { ObjectType, Field } from '@nestjs/graphql';
import { Gig } from 'src/gig/entities/gig.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Favorite {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'name of gigs' })
  @Column()
  gigs: string;

  @Field({ description: 'gig id' })
  @Column()
  gigId: string;

  @Field({ description: 'user id' })
  @Column()
  userId: string;

  @ManyToOne(() => Gig, (gig) => gig.favorite)
  @Field(() => Gig, { description: 'Gig favorite' })
  gig: Gig;

  @ManyToOne(() => User, (user) => user.favorite)
  @Field(() => User, { description: 'user favorite' })
  user: User;
}
