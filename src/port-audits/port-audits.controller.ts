import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortAuditsService } from './port-audits.service';
import { CreatePortAuditDto } from './dto/create-port-audit.dto';
import { UpdatePortAuditDto } from './dto/update-port-audit.dto';

@Controller('port-audits')
export class PortAuditsController {
  constructor(private readonly portAuditsService: PortAuditsService) {}

  @Post()
  create(@Body() createPortAuditDto: CreatePortAuditDto) {
    return this.portAuditsService.create(createPortAuditDto);
  }

  @Get()
  findAll() {
    return this.portAuditsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portAuditsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortAuditDto: UpdatePortAuditDto) {
    return this.portAuditsService.update(+id, updatePortAuditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portAuditsService.remove(+id);
  }
}
