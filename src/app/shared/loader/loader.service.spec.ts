import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { LoaderService } from './loader.service';

import { AppComponent } from '@app/app.component';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent1Component } from '@app/app-component1/app-component1.component';
import { SharedModule } from '@app/shared/shared.module';
import { AppComponent2Component } from '@app/app-component2/app-component2.component';
import { AppComponent3Component } from '@app/app-component3/app-component3.component';
import { AppComponent4Component } from '@app/app-component4/app-component4.component';
import { AppComponent5Component } from '@app/app-component5/app-component5.component';
import { FeaturesModuleModule } from '@app/features-module/features-module.module';
import { TodosModule } from '@app/todos/todos.module';
import { NotFoundComponent } from '@app/not-found/not-found.component';

describe('LoaderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
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
        TodosModule,
        HttpClientModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }));

  it('should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });
});
