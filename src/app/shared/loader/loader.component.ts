import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from './loader.interface';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  showLoader: boolean = false;
  subscription: Subscription;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.subscription = this.loaderService.LoaderObservable.subscribe(
      (state: LoaderState) => {
        this.showLoader = state.showLoader;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
