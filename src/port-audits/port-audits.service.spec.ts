import { Test, TestingModule } from '@nestjs/testing';
import { PortAuditsService } from './port-audits.service';

describe('PortAuditsService', () => {
  let service: PortAuditsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortAuditsService],
    }).compile();

    service = module.get<PortAuditsService>(PortAuditsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
