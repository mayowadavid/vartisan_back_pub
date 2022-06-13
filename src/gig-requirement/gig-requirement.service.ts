import { Injectable } from '@nestjs/common';
import { CreateGigRequirementInput } from './dto/create-gig-requirement.input';
import { UpdateGigRequirementInput } from './dto/update-gig-requirement.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GigRequirement } from './entities/gig-requirement.entity';

@Injectable()
export class GigRequirementService {
  constructor(
    @InjectRepository(GigRequirement)
    private gigRequirementRepository: Repository<GigRequirement>,
  ) {}
  create(
    createGigRequirementInput: CreateGigRequirementInput,
  ): Promise<GigRequirement> {
    const gigRequirement = this.gigRequirementRepository.create(
      createGigRequirementInput,
    );
    return this.gigRequirementRepository.save(gigRequirement);
  }

  findAll(): Promise<GigRequirement[]> {
    return this.gigRequirementRepository.find({
      relations: ['gig'],
    });
  }

  findOne(id: string): Promise<GigRequirement> {
    return this.gigRequirementRepository.findOne(id, {
      relations: ['gig'],
    });
  }

  update(
    id: string,
    updateGigRequirementInput: UpdateGigRequirementInput,
  ): Promise<GigRequirement> {
    const gigRequirement: GigRequirement = this.gigRequirementRepository.create(
      updateGigRequirementInput,
    );
    gigRequirement.id = id;
    return this.gigRequirementRepository.save(gigRequirement);
  }

  async remove(id: string): Promise<GigRequirement> {
    const deleteGigRequirement = await this.gigRequirementRepository.findOne(
      id,
    );
    const copy = { ...deleteGigRequirement };
    deleteGigRequirement.gig = null;
    const result = await this.gigRequirementRepository.save(
      deleteGigRequirement,
    );
    await this.gigRequirementRepository.remove(result);
    return copy;
  }
}
