import { ObjectType, Field } from '@nestjs/graphql';
import { OrderFaq } from 'src/order-faq/entities/order-faq.entity';
import { OrderRequirement } from 'src/order-requirement/entities/order-requirement.entity';
import { User } from 'src/users/entities/user.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { Message } from 'src/messages/entities/message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

export enum OrderStatus {
  CANCELLED = 'cancelled',
  WITHDRAWN = 'withdrawn',
  NOT_ACTIVE = 'not_active',
  REVISION = 'revision',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

@ObjectType()
@Entity()
export class Order {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'name', nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ description: 'order quantity', nullable: true })
  @Column({ nullable: true })
  quantity: string;

  @Field({ description: 'category', nullable: true })
  @Column({ nullable: true })
  category: string;

  @Field({ description: 'date', nullable: true })
  @Column({ nullable: true })
  date: string;

  @Field({ description: 'gig image', nullable: true })
  @Column({ nullable: true })
  gigImage: string;

  @Field({ description: 'revision', nullable: true })
  @Column({ nullable: true })
  revision: string;

  @Field({ description: 'approve date', nullable: true })
  @Column({ nullable: true })
  approveDate: string;

  @Field({ description: 'vartisan', nullable: true })
  @Column({ nullable: true })
  vartisan: string;

  @Field({ description: 'order status', nullable: true })
  @Column({
    nullable: true,
    type: 'enum',
    enum: OrderStatus,
    default: 'not_active',
  })
  orderStatus: OrderStatus;

  @Field({ description: 'order amount', nullable: true })
  @Column({ nullable: true })
  amount: string;

  @Field({ description: 'order source file', nullable: true })
  @Column({ nullable: true })
  sourceFile: boolean;

  @Field({ description: 'commercial order', nullable: true })
  @Column({ nullable: true })
  commercial: boolean;

  @Field({ description: 'rush order', nullable: true })
  @Column({ nullable: true })
  rushOrder: boolean;

  @Field({ description: 'private order', nullable: true })
  @Column({ nullable: true })
  privateOrder: boolean;

  @Field({ description: 'rush order amount', nullable: true })
  @Column({ nullable: true })
  rushOrderAmount: string;

  @Field({ description: 'rush order delivery', nullable: true })
  @Column({ nullable: true })
  rushOrderDelivery: string;

  @Field({ description: 'commercial order amount', nullable: true })
  @Column({ nullable: true })
  commercialOrderAmount: string;

  @Field({ description: 'commercial order delivery', nullable: true })
  @Column({ nullable: true })
  commercialOrderDelivery: string;

  @Field({ description: 'private order amount', nullable: true })
  @Column({ nullable: true })
  privateOrderAmount: string;

  @Field({ description: 'private order delivery', nullable: true })
  @Column({ nullable: true })
  privateOrderDelivery: string;

  @Field({ description: 'order end', nullable: true })
  @Column({ nullable: true })
  end: string;

  @Field({ description: 'order total', nullable: true })
  @Column({ nullable: true })
  total: string;

  @Field({ description: 'order gig id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @Field({ description: 'order requirement id', nullable: true })
  @Column({ nullable: true })
  orderRequirementId: string;

  @Field({ description: 'order seller id', nullable: true })
  @Column({ nullable: true })
  sellerId: string;

  @Field({ description: 'order client id', nullable: true })
  @Column({ nullable: true })
  clientId: string;

  @ManyToOne(() => User, (user) => user.seller)
  @Field(() => User, { description: 'user orders seller', nullable: true })
  seller: User;

  @ManyToOne(() => User, (user) => user.client)
  @Field(() => User, { description: 'user orders client', nullable: true })
  client: User;

  @ManyToOne(() => Gig, (gig) => gig.order)
  @Field(() => Gig, { description: 'gig order', nullable: true })
  gig: Gig;

  @OneToMany(() => Message, (message) => message.order)
  @Field(() => [Message], { description: 'order message', nullable: true })
  message: Message[];

  @OneToMany(() => OrderFaq, (orderFaq) => orderFaq.order)
  @Field(() => [OrderFaq], { description: 'order requirement', nullable: true })
  orderFaq: OrderFaq[];

  @Field({ description: 'order faq id', nullable: true })
  @Column({ nullable: true })
  orderFaqId: string;

  @OneToOne(
    () => OrderRequirement,
    (orderRequirement) => orderRequirement.order,
  )
  @JoinColumn()
  @Field(() => OrderRequirement, {
    description: 'order requirement',
    nullable: true,
  })
  orderRequirement: OrderRequirement;
}
