import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiCallsService } from '@app/shared/api-calls.service';
import { ConstantsService } from './shared/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-starter-kit';
  notificationMessage: string =
    'Welcome to our Angular seed project. This notification will auto close in 5 seconds! ';
  commentsData: string;

  constructor(
    private apiService: ApiCallsService,
    private appConstants: ConstantsService
  ) {}
  ngOnInit() {
    console.log('You have chosen to run app in ' + environment.environment);

    this.apiService
      .fetchApiData(
        this.appConstants.commentsApiUrl,
        {},
        this.appConstants.apiGetCallType
      )
      .subscribe(
        data => {
          JSON.stringify(data);
          this.commentsData = JSON.stringify(data);
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
}
