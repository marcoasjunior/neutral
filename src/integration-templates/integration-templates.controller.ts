import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntegrationTemplatesService } from './integration-templates.service';
import { CreateIntegrationTemplateDto } from './dto/create-integration-template.dto';
import { UpdateIntegrationTemplateDto } from './dto/update-integration-template.dto';

@Controller('integration-templates')
export class IntegrationTemplatesController {
  constructor(private readonly integrationTemplatesService: IntegrationTemplatesService) {}

  @Post()
  create(@Body() createIntegrationTemplateDto: CreateIntegrationTemplateDto) {
    return this.integrationTemplatesService.create(createIntegrationTemplateDto);
  }

  @Get()
  findAll() {
    return this.integrationTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.integrationTemplatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntegrationTemplateDto: UpdateIntegrationTemplateDto) {
    return this.integrationTemplatesService.update(+id, updateIntegrationTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.integrationTemplatesService.remove(+id);
  }
}
