import { PartialType } from '@nestjs/swagger';
import { CreateIspDto } from './create-isp.dto';

export class UpdateIspDto extends PartialType(CreateIspDto) {}
