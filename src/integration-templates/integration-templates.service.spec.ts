import { Test, TestingModule } from '@nestjs/testing';
import { IntegrationTemplatesService } from './integration-templates.service';

describe('IntegrationTemplatesService', () => {
  let service: IntegrationTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntegrationTemplatesService],
    }).compile();

    service = module.get<IntegrationTemplatesService>(IntegrationTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
