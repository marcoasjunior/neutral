import { Test, TestingModule } from '@nestjs/testing';
import { IntegrationTemplatesController } from './integration-templates.controller';
import { IntegrationTemplatesService } from './integration-templates.service';

describe('IntegrationTemplatesController', () => {
  let controller: IntegrationTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntegrationTemplatesController],
      providers: [IntegrationTemplatesService],
    }).compile();

    controller = module.get<IntegrationTemplatesController>(IntegrationTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
