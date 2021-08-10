import { Test, TestingModule } from '@nestjs/testing';
import { PendenciesService } from './pendencies.service';

describe('PendenciesService', () => {
  let service: PendenciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PendenciesService],
    }).compile();

    service = module.get<PendenciesService>(PendenciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
