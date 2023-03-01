import { PartialType } from '@nestjs/mapped-types';
import { CreateRijonDto } from './create-rijon.dto';

export class UpdateRijonDto extends PartialType(CreateRijonDto) {}
