import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Gig } from 'src/gig/entities/gig.entity';

@ObjectType()
@Entity()
export class CommercialUse {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'status', nullable: true })
  @Column({ nullable: true })
  status: boolean;

  @Field({ description: 'price', nullable: true })
  @Column({ nullable: true })
  price: string;

  @Field({ description: 'deliveryPeriod', nullable: true })
  @Column({ nullable: true })
  deliveryPeriod: string;

  @Field({ description: 'gigId', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @OneToOne(() => Gig, (gig) => gig.commercialUse)
  @Field(() => Gig, { description: 'commercial use', nullable: true })
  gig: Gig;
}
