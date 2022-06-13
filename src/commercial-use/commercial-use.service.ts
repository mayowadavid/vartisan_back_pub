import { Injectable } from '@nestjs/common';
import { CreateCommercialUseInput } from './dto/create-commercial-use.input';
import { UpdateCommercialUseInput } from './dto/update-commercial-use.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommercialUse } from './entities/commercial-use.entity';

@Injectable()
export class CommercialUseService {
  constructor(
    @InjectRepository(CommercialUse)
    private commercialUseRepository: Repository<CommercialUse>,
  ) {}
  create(
    createCommercialUseInput: CreateCommercialUseInput,
  ): Promise<CommercialUse> {
    const commercialUse = this.commercialUseRepository.create(
      createCommercialUseInput,
    );
    return this.commercialUseRepository.save(commercialUse);
  }

  findAll(): Promise<CommercialUse[]> {
    return this.commercialUseRepository.find({
      relations: ['gig'],
    });
  }

  findOne(id: string): Promise<CommercialUse> {
    return this.commercialUseRepository.findOne(id, {
      relations: ['gig'],
    });
  }

  update(
    id: string,
    updateCommercialUseInput: UpdateCommercialUseInput,
  ): Promise<CommercialUse> {
    const commercialUse: CommercialUse = this.commercialUseRepository.create(
      updateCommercialUseInput,
    );
    commercialUse.id = id;
    return this.commercialUseRepository.save(commercialUse);
  }

  async remove(id: string): Promise<CommercialUse> {
    const deleteCommercialUse = await this.commercialUseRepository.findOne(id, {
      relations: ['gig'],
    });
    await this.commercialUseRepository.remove(deleteCommercialUse);
    return deleteCommercialUse;
  }
}
