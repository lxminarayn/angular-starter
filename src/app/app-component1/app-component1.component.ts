import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '@app/shared/api-calls.service';
import { LoaderService } from '@app/shared/loader/loader.service';
import { ConstantsService } from '@app/shared/constants.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-app-component1',
  templateUrl: './app-component1.component.html',
  styleUrls: ['./app-component1.component.scss']
})
export class AppComponent1Component implements OnInit {
  constructor(
    private apiService: ApiCallsService,
    private loaderService: LoaderService,
    private appConstants: ConstantsService
  ) {}

  ngOnInit() {
    // We are setting this value to the service in feature module, which can be accessed from other components/modules as well.
    this.apiService.testVariable = 'This is set from app-component-1';
    this.loaderService.toggleStatus();

    const call1 = this.apiService.fetchApiData(
      this.appConstants.commentsApiUrl,
      {},
      'post'
    );

    const call2 = this.apiService.fetchApiData(
      this.appConstants.photoApiUrl,
      {},
      'post'
    );

    forkJoin([call1, call2]).subscribe(
      data => {
        this.loaderService.toggleStatus();
      },
      error => {
        // You can log these errors to some backend analytics/logger, as required in your application
        console.error('Error message received : ' + error.message);
        this.loaderService.toggleStatus();
      }
    );
  }

  continueFn(viewName) {
    this.apiService.continueFn(viewName);
    this.loaderService.toggleStatus();
  }
}
