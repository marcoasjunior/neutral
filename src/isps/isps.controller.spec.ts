import { Test, TestingModule } from '@nestjs/testing';
import { IspsController } from './isps.controller';
import { IspsService } from './isps.service';

describe('IspsController', () => {
  let controller: IspsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IspsController],
      providers: [IspsService],
    }).compile();

    controller = module.get<IspsController>(IspsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
