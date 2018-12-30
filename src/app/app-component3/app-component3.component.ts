import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from '@app/shared/api-calls.service';
import { ConstantsService } from '@app/shared/constants.service';

@Component({
  selector: 'app-app-component3',
  templateUrl: './app-component3.component.html',
  styleUrls: ['./app-component3.component.scss']
})
export class AppComponent3Component implements OnInit {
  commentsData: Array<any>;
  constructor(
    private _router: Router,
    private apiService: ApiCallsService,
    private appConstants: ConstantsService
  ) {}

  ngOnInit() {
    this.apiService
      .fetchApiData(
        this.appConstants.commentsApiUrl,
        {},
        this.appConstants.apiGetCallType
      )
      .subscribe(
        data => {
          this.commentsData = data;
        },
        error => {
          // You can log these errors to some backend analytics/logger, as required in your application
          console.log(
            'Error occured while hitting ' +
              this.appConstants.commentsApiUrl +
              ' . Error message received : ' +
              error.message
          );
        }
      );
  }

  continueFn(viewName) {
    this.apiService.continueFn(viewName);
  }
}
