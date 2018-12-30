import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from '@app/shared/api-calls.service';
import { LoaderService } from '@app/shared/loader/loader.service';

@Component({
  selector: 'app-app-component2',
  templateUrl: './app-component2.component.html',
  styleUrls: ['./app-component2.component.scss']
})
export class AppComponent2Component implements OnInit {
  constructor(
    private _router: Router,
    private apiService: ApiCallsService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    // Just to show the loader effect temporarily - can be removed
    setTimeout(() => {
      this.loaderService.toggleStatus();
    }, 1000);
  }

  continueFn(viewName) {
    this.apiService.continueFn(viewName);
  }
}
