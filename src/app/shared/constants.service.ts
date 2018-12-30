import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()

// This service is exclusively used to hold all the application level constants, which can  be inserted globally
// Use this to even hold magic numbers / numbers which you will use for comparisons across the application
export class ConstantsService {
  photoApiUrl: string;
  commentsApiUrl: string;
  usersApiurl: string;
  getPostApi: string;
  apiGetCallType: string = 'get';
  apiPostCallType: string = 'post';

  // Instead of maintaining all the urls in individual environment files, I prefer it assigning it from here for each environment
  constructor() {
    switch (environment.environment) {
      case 'LOCAL':
        this.photoApiUrl = 'https://jsonplaceholder.typicode.com/photos';
        this.commentsApiUrl = 'https://jsonplaceholder.typicode.com/comments';
        this.usersApiurl = 'https://jsonplaceholder.typicode.com/users';
        this.getPostApi = 'http://jsonplaceholder.typicode.com/posts';
    }
  }
}
