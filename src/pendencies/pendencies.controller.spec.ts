import { Test, TestingModule } from '@nestjs/testing';
import { PendenciesController } from './pendencies.controller';
import { PendenciesService } from './pendencies.service';

describe('PendenciesController', () => {
  let controller: PendenciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendenciesController],
      providers: [PendenciesService],
    }).compile();

    controller = module.get<PendenciesController>(PendenciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
