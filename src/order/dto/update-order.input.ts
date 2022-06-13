import { CreateOrderInput } from './create-order.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { OrderStatus } from '../entities/order.entity';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field()
  id: string;

  @Field({ description: 'name', nullable: true })
  name: string;

  @Field({ description: 'order quantity', nullable: true })
  quantity: string;

  @Field({ description: 'category', nullable: true })
  category: string;

  @Field({ description: 'date', nullable: true })
  date: string;

  @Field({ description: 'gig image', nullable: true })
  gigImage: string;

  @Field({ description: 'revision', nullable: true })
  revision: string;

  @Field({ description: 'approve date', nullable: true })
  approveDate: string;

  @Field({ description: 'order status', nullable: true })
  orderStatus: OrderStatus;

  @Field({ description: 'order amount', nullable: true })
  amount: string;

  @Field({ description: 'order source file', nullable: true })
  sourceFile: boolean;

  @Field({ description: 'commercial order', nullable: true })
  commercial: boolean;

  @Field({ description: 'rush order', nullable: true })
  rushOrder: boolean;

  @Field({ description: 'private order', nullable: true })
  privateOrder: boolean;

  @Field({ description: 'rush order amount', nullable: true })
  rushOrderAmount: string;

  @Field({ description: 'rush order delivery', nullable: true })
  rushOrderDelivery: string;

  @Field({ description: 'commercial order amount', nullable: true })
  commercialOrderAmount: string;

  @Field({ description: 'commercial order delivery', nullable: true })
  commercialOrderDelivery: string;

  @Field({ description: 'private order amount', nullable: true })
  privateOrderAmount: string;

  @Field({ description: 'private order delivery', nullable: true })
  privateOrderDelivery: string;

  @Field({ description: 'order end', nullable: true })
  end: string;

  @Field({ description: 'order total', nullable: true })
  total: string;

  @Field({ description: 'order faq id', nullable: true })
  orderFaqId: string;

  @Field({ description: 'order requirement id', nullable: true })
  orderRequirementId: string;

  @Field({ description: 'order gig id', nullable: true })
  gigId: string;

  @Field({ description: 'order seller id', nullable: true })
  sellerId: string;

  @Field({ description: 'order client id', nullable: true })
  clientId: string;
}
