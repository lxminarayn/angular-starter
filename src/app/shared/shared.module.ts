import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ApiCallsService } from '@app/shared/api-calls.service';
import { ConstantsService } from '@app/shared/constants.service';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})

// We have exported this module with forRoot method, so that we can include a common shared dependency injection for this module,
// so that other modules can also reuse same service from this module.
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ApiCallsService, ConstantsService, LoaderService]
    };
  }
}
