import { Injectable } from '@nestjs/common';
import { CreateFooterInput } from './dto/create-footer.input';
import { UpdateFooterInput } from './dto/update-footer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Footer } from './entities/footer.entity';

@Injectable()
export class FooterService {
  constructor(
    @InjectRepository(Footer) private footerRepository: Repository<Footer>,
  ) {}
  create(createFooterInput: CreateFooterInput): Promise<Footer> {
    const foot = this.footerRepository.create(createFooterInput);
    return this.footerRepository.save(foot);
  }

  findAll(): Promise<Footer[]> {
    return this.footerRepository.find();
  }

  findOne(id: string): Promise<Footer> {
    return this.footerRepository.findOne(id);
  }

  update(id: string, updateFooterInput: UpdateFooterInput): Promise<Footer> {
    const footer: Footer = this.footerRepository.create(updateFooterInput);
    footer.id = id;
    return this.footerRepository.save(footer);
  }

  async remove(id: string): Promise<Footer> {
    const deleteFooter = await this.footerRepository.findOne(id);
    await this.footerRepository.remove(deleteFooter);
    return deleteFooter;
  }
}
