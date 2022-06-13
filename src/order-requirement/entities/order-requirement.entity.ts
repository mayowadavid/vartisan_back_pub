import { ObjectType, Field } from '@nestjs/graphql';
import { Order } from 'src/order/entities/order.entity';
import { File } from 'src/files/entities/file.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@ObjectType()
@Entity()
export class OrderRequirement {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'order description', nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field({ description: 'requirement creation date', nullable: true })
  @Column({ nullable: true })
  date: string;

  @Field({ description: 'order reference', nullable: true })
  @Column({ nullable: true })
  reference: string;

  @Field({ description: 'order color', nullable: true })
  @Column({ nullable: true })
  color: string;

  @Field({ description: 'order requirement id', nullable: true })
  @Column({ nullable: true })
  orderId: string;

  @OneToOne(() => File, (file) => file.descriptionFile)
  @JoinColumn()
  @Field(() => File, { description: 'order description file', nullable: true })
  descriptionFile: File;

  @OneToOne(() => File, (file) => file.referenceFile)
  @JoinColumn()
  @Field(() => File, { description: 'order reference file', nullable: true })
  referenceFile: File;

  @OneToOne(() => File, (file) => file.colorFile)
  @JoinColumn()
  @Field(() => File, { description: 'order color file', nullable: true })
  colorFile: File;

  @OneToOne(() => Order, (order) => order.orderRequirement)
  @Field(() => Order, { description: 'order requirement', nullable: true })
  order: Order;
}
