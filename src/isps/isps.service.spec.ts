import { Test, TestingModule } from '@nestjs/testing';
import { IspsService } from './isps.service';

describe('IspsService', () => {
  let service: IspsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IspsService],
    }).compile();

    service = module.get<IspsService>(IspsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
