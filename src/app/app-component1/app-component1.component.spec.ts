import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent1Component } from './app-component1.component';
import { SharedModule } from '@app/shared/shared.module';
import { Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ApiCallsService } from '@app/shared/api-calls.service';
import { LoaderService } from '@app/shared/loader/loader.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent1Component', () => {
  let component: AppComponent1Component;
  let fixture: ComponentFixture<AppComponent1Component>;

  beforeEach(async(() => {
    const routes: Routes = [
      {
        path: '',
        component: AppComponent1Component,
        pathMatch: 'full'
      },
      {
        path: 'comp1',
        component: AppComponent1Component
      }
    ];

    TestBed.configureTestingModule({
      declarations: [AppComponent1Component],
      imports: [SharedModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ApiCallsService, LoaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('click button function works', async(() => {
    spyOn(component, 'continueFn');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.continueFn).toHaveBeenCalled();
    });
  }));
});
