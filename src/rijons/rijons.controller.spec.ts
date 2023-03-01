import { Test, TestingModule } from '@nestjs/testing';
import { RijonsController } from './rijons.controller';

describe('RijonsController', () => {
  let controller: RijonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RijonsController],
    }).compile();

    controller = module.get<RijonsController>(RijonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
