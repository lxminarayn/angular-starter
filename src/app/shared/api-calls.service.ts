import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class ApiCallsService {
  testVariable: string = 'this is default value';

  ContinueViews = {
    appcomp1: '/comp2',
    appcomp2: '/comp3',
    appcomp3: '/comp4'
  };

  constructor(private _router: Router, private http: HttpClient) {}

  // Function to navigate to next screen, by determining current view and next view
  continueFn(view): any {
    if (this.ContinueViews.hasOwnProperty(view)) {
      this._router.navigateByUrl(this.ContinueViews[view], {
        skipLocationChange: true
      });
    }
  }

  fetchApiData(url, payLoad, callType): Observable<any> {
    // Here you can set session authentication related info the header of the API call, as required.

    // Make a preliminary check to check if payload and session data are present before making api call - optional

    // If post call
    if (callType === 'post') {
      return this.http
        .post<{ data: Object }>(url, payLoad, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            authToken: 'token_you_receive_from_server',
            userId: 'get_from_localStorage_or_elsewhere'
          })
        })
        .pipe(catchError(this.handleError));
    } else if (callType === 'get') {
      return this.http
        .get<{ data: Object }>(url)
        .pipe(catchError(this.handleError));
    }
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
