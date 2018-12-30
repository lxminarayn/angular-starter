import { FeaturesModuleModule } from './features-module.module';

describe('FeaturesModuleModule', () => {
  let featuresModuleModule: FeaturesModuleModule;

  beforeEach(() => {
    featuresModuleModule = new FeaturesModuleModule();
  });

  it('should create an instance', () => {
    expect(featuresModuleModule).toBeTruthy();
  });
});
