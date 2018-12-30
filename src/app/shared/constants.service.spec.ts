import { TestBed } from '@angular/core/testing';
import { ConstantsService } from './constants.service';

import {APP_BASE_HREF} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent1Component } from '../app-component1/app-component1.component';
import { SharedModule } from '@app/shared/shared.module';
import { AppComponent2Component } from '../app-component2/app-component2.component';
import { AppComponent3Component } from '../app-component3/app-component3.component';
import { AppComponent4Component } from '../app-component4/app-component4.component';
import { AppComponent5Component } from '../app-component5/app-component5.component';
import { FeaturesModuleModule } from '../features-module/features-module.module';
import { TodosModule } from '../todos/todos.module';
import { NotFoundComponent } from '../not-found/not-found.component';

describe('ConstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      AppComponent1Component,
      AppComponent2Component,
      AppComponent3Component,
      AppComponent4Component,
      AppComponent5Component,
      NotFoundComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule.forRoot(),
      FeaturesModuleModule,
      TodosModule
    ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]

  }));

  it('should be created', () => {
    const service: ConstantsService = TestBed.get(ConstantsService);
    expect(service).toBeTruthy();
  });
});
