import { Test, TestingModule } from '@nestjs/testing';
import { PortAuditsController } from './port-audits.controller';
import { PortAuditsService } from './port-audits.service';

describe('PortAuditsController', () => {
  let controller: PortAuditsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortAuditsController],
      providers: [PortAuditsService],
    }).compile();

    controller = module.get<PortAuditsController>(PortAuditsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
