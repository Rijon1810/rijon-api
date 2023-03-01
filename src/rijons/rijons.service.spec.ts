import { Test, TestingModule } from '@nestjs/testing';
import { RijonsService } from './rijons.service';

describe('RijonsService', () => {
  let service: RijonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RijonsService],
    }).compile();

    service = module.get<RijonsService>(RijonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
