import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PendenciesService } from './pendencies.service';
import { CreatePendencyDto } from './dto/create-pendency.dto';
import { UpdatePendencyDto } from './dto/update-pendency.dto';

@Controller('pendencies')
export class PendenciesController {
  constructor(private readonly pendenciesService: PendenciesService) {}

  @Post()
  create(@Body() createPendencyDto: CreatePendencyDto) {
    return this.pendenciesService.create(createPendencyDto);
  }

  @Get()
  findAll() {
    return this.pendenciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendenciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePendencyDto: UpdatePendencyDto) {
    return this.pendenciesService.update(+id, updatePendencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendenciesService.remove(+id);
  }
}
