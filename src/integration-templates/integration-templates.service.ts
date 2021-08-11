import { Injectable } from '@nestjs/common';
import { CreateIntegrationTemplateDto } from './dto/create-integration-template.dto';
import { UpdateIntegrationTemplateDto } from './dto/update-integration-template.dto';

@Injectable()
export class IntegrationTemplatesService {
  create(createIntegrationTemplateDto: CreateIntegrationTemplateDto) {
    return 'This action adds a new integrationTemplate';
  }

  findAll() {
    return `This action returns all integrationTemplates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} integrationTemplate`;
  }

  update(id: number, updateIntegrationTemplateDto: UpdateIntegrationTemplateDto) {
    return `This action updates a #${id} integrationTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} integrationTemplate`;
  }
}
