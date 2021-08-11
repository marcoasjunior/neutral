import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IspsService } from './isps.service';
import { CreateIspDto } from './dto/create-isp.dto';
import { UpdateIspDto } from './dto/update-isp.dto';

@Controller('isps')
export class IspsController {
  constructor(private readonly ispsService: IspsService) {}

  @Post()
  create(@Body() createIspDto: CreateIspDto) {
    return this.ispsService.create(createIspDto);
  }

  @Get()
  findAll() {
    return this.ispsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ispsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIspDto: UpdateIspDto) {
    return this.ispsService.update(+id, updateIspDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ispsService.remove(+id);
  }
}
