import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RushOrder } from './entities/rush-order.entity';
import { CreateRushOrderInput } from './dto/create-rush-order.input';
import { UpdateRushOrderInput } from './dto/update-rush-order.input';

@Injectable()
export class RushOrderService {
  constructor(
    @InjectRepository(RushOrder)
    private rushOrderRepository: Repository<RushOrder>,
  ) {}
  create(createRushOrderInput: CreateRushOrderInput): Promise<RushOrder> {
    const rushOrder = this.rushOrderRepository.create(createRushOrderInput);
    return this.rushOrderRepository.save(rushOrder);
  }

  findAll(): Promise<RushOrder[]> {
    return this.rushOrderRepository.find({
      relations: ['gig'],
    });
  }

  findOne(id: string): Promise<RushOrder> {
    return this.rushOrderRepository.findOne(id, {
      relations: ['gig'],
    });
  }

  update(
    id: string,
    updateRushOrderInput: UpdateRushOrderInput,
  ): Promise<RushOrder> {
    const rushOrder: RushOrder =
      this.rushOrderRepository.create(updateRushOrderInput);
    rushOrder.id = id;
    return this.rushOrderRepository.save(rushOrder);
  }

  async remove(id: string): Promise<RushOrder> {
    const deleteRushOrder = await this.rushOrderRepository.findOne(id, {
      relations: ['gig'],
    });
    await this.rushOrderRepository.remove(deleteRushOrder);
    return deleteRushOrder;
  }
}
