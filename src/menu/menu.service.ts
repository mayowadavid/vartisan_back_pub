import { Injectable } from '@nestjs/common';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}

  create(createMenuInput: CreateMenuInput): Promise<Menu> {
    const menu = this.menuRepository.create(createMenuInput);
    return this.menuRepository.save(menu);
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find({
      relations: ['headerId', 'subMenuId'],
    });
  }

  findOne(id: string): Promise<Menu> {
    return this.menuRepository.findOne(id, {
      relations: ['headerId', 'subMenuId'],
    });
  }

  update(id: string, updateMenuInput: UpdateMenuInput): Promise<Menu> {
    const menu: Menu = this.menuRepository.create(updateMenuInput);
    menu.id = id;
    return this.menuRepository.save(menu);
  }

  async remove(id: string): Promise<Menu> {
    const deleteMenu = await this.menuRepository.findOne(id, {
      relations: ['headerId', 'subMenuId'],
    });
    await this.menuRepository.remove(deleteMenu);
    return deleteMenu;
  }
}
