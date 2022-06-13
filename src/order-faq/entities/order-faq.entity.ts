import { ObjectType, Field } from '@nestjs/graphql';
import { Order } from 'src/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class OrderFaq {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'faq name' })
  @Column()
  name: string;

  @Field({ description: 'faq status' })
  @Column()
  status: string;

  @Field({ description: 'faq description' })
  @Column()
  description: string;

  @ManyToOne(() => Order, (order) => order.orderFaq)
  @Field(() => Order, { description: 'order requirement' })
  order: Order;

  @Field({ description: 'orderId' })
  @Column()
  orderId: string;
}
