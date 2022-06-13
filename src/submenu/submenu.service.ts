import { Injectable } from '@nestjs/common';
import { CreateSubmenuInput } from './dto/create-submenu.input';
import { UpdateSubmenuInput } from './dto/update-submenu.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Submenu } from './entities/submenu.entity';

@Injectable()
export class SubmenuService {
  constructor(
    @InjectRepository(Submenu)
    private subMenuRepository: Repository<Submenu>,
  ) {}

  create(createSubmenuInput: CreateSubmenuInput): Promise<Submenu> {
    const submenu = this.subMenuRepository.create(createSubmenuInput);
    return this.subMenuRepository.save(submenu);
  }

  findAll(): Promise<Submenu[]> {
    return this.subMenuRepository.find({
      relations: ['menu'],
    });
  }

  findOne(id: string): Promise<Submenu> {
    return this.subMenuRepository.findOne(id, {
      relations: ['menu'],
    });
  }

  update(id: string, updateSubmenuInput: UpdateSubmenuInput): Promise<Submenu> {
    const submenu: Submenu = this.subMenuRepository.create(updateSubmenuInput);
    submenu.id = id;
    return this.subMenuRepository.save(submenu);
  }

  async remove(id: string): Promise<Submenu> {
    const deleteSubmenu = await this.subMenuRepository.findOne(id, {
      relations: ['menu'],
    });
    await this.subMenuRepository.remove(deleteSubmenu);
    return deleteSubmenu;
  }
}
