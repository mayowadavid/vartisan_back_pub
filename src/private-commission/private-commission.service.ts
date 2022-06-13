import { Injectable } from '@nestjs/common';
import { CreatePrivateCommissionInput } from './dto/create-private-commission.input';
import { UpdatePrivateCommissionInput } from './dto/update-private-commission.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrivateCommission } from './entities/private-commission.entity';

@Injectable()
export class PrivateCommissionService {
  constructor(
    @InjectRepository(PrivateCommission)
    private privateCommissionRepository: Repository<PrivateCommission>,
  ) {}
  create(
    createPrivateCommissionInput: CreatePrivateCommissionInput,
  ): Promise<PrivateCommission> {
    const privateCommission = this.privateCommissionRepository.create(
      createPrivateCommissionInput,
    );
    return this.privateCommissionRepository.save(privateCommission);
  }

  findAll(): Promise<PrivateCommission[]> {
    return this.privateCommissionRepository.find({
      relations: ['gig'],
    });
  }

  findOne(id: string): Promise<PrivateCommission> {
    return this.privateCommissionRepository.findOne(id, {
      relations: ['gig'],
    });
  }

  update(
    id: string,
    updatePrivateCommissionInput: UpdatePrivateCommissionInput,
  ): Promise<PrivateCommission> {
    const privateCommission: PrivateCommission =
      this.privateCommissionRepository.create(updatePrivateCommissionInput);
    privateCommission.id = id;
    return this.privateCommissionRepository.save(privateCommission);
  }

  async remove(id: string): Promise<PrivateCommission> {
    const deletePrivateCommission =
      await this.privateCommissionRepository.findOne(id, {
        relations: ['gig'],
      });
    await this.privateCommissionRepository.remove(deletePrivateCommission);
    return deletePrivateCommission;
  }
}
