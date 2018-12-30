import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from './loader.interface';

@Injectable()
export class LoaderService {
  showLoader: boolean = false;
  loaderSubject = new Subject<LoaderState>();

  LoaderObservable = this.loaderSubject.asObservable();

  constructor() {}

  toggleStatus() {
    this.showLoader = !this.showLoader;
    this.loaderSubject.next(<LoaderState>{ showLoader: this.showLoader });
  }
}
