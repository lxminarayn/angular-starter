

import { AppComponent4Component } from './app-component4.component';
import { AppComponent5Component } from '../app-component5/app-component5.component';

import { SharedModule } from '@app/shared/shared.module';
import { Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick, async, ComponentFixture, } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

describe('AppComponent4Component', () => {
  let component: AppComponent4Component;
  let fixture: ComponentFixture<AppComponent4Component>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {

    const routes: Routes = [
      {
        path: 'comp4',
        component: AppComponent4Component,
      children: [{
        path: 'comp5',
        component: AppComponent5Component
      }]
      }
    ];


    TestBed.configureTestingModule({
      declarations: [AppComponent4Component, AppComponent5Component],
      imports: [SharedModule.forRoot(), RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to child route comp5', fakeAsync(() => {
    router.navigate(['/comp4/comp5']);
    tick();
    expect(location.path()).toBe('/comp4/comp5');
  }));


});
