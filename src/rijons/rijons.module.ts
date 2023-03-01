import { Module } from '@nestjs/common';
import { RijonsController } from './rijons.controller';
import { RijonsService } from './rijons.service';

@Module({
  controllers: [RijonsController],
  providers: [RijonsService]
})
export class RijonsModule {}
