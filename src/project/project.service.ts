import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  create(project: CreateProjectInput): Promise<Project> {
    const proj = this.projectRepository.create(project);
    return this.projectRepository.save(proj);
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: ['employees'],
    });
  }

  findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne(id, { relations: ['employees'] });
  }

  update(id: string, updateProjectInput: UpdateProjectInput): Promise<Project> {
    const project: Project = this.projectRepository.create(updateProjectInput);
    project.id = id;
    return this.projectRepository.save(project);
  }

  async remove(id: string): Promise<Project> {
    const deleteProject = await this.projectRepository.findOne(id, {
      relations: ['employees'],
    });
    await this.projectRepository.remove(deleteProject);
    return deleteProject;
  }
}
