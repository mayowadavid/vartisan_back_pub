import { Injectable } from '@nestjs/common';
import { CreateHeaderInput } from './dto/create-header.input';
import { UpdateHeaderInput } from './dto/update-header.input';
import { Header } from './entities/header.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HeadersService {
  constructor(
    @InjectRepository(Header) private headersRepository: Repository<Header>,
  ) {}

  create(createHeaderInput: CreateHeaderInput): Promise<Header> {
    const header = this.headersRepository.create(createHeaderInput);
    return this.headersRepository.save(header);
  }

  findAll(): Promise<Header[]> {
    return this.headersRepository.find({
      relations: ['menu'],
    });
  }

  findOne(id: string): Promise<Header> {
    return this.headersRepository.findOne(id, { relations: ['menu'] });
  }

  update(id: string, updateHeaderInput: UpdateHeaderInput): Promise<Header> {
    const header: Header = this.headersRepository.create(updateHeaderInput);
    header.id = id;
    return this.headersRepository.save(header);
  }

  async remove(id: string): Promise<Header> {
    const deleteHeader = await this.headersRepository.findOne(id, {
      relations: ['menu'],
    });
    await this.headersRepository.remove(deleteHeader);
    return deleteHeader;
  }
}
