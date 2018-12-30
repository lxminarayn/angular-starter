import { AppComponent5Component } from '../app-component5/app-component5.component';

import { SharedModule } from '@app/shared/shared.module';
import { Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { Location } from '@angular/common';
import {
  TestBed,
  fakeAsync,
  tick,
  async,
  ComponentFixture
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AppComponent5Component', () => {
  let component: AppComponent5Component;
  let fixture: ComponentFixture<AppComponent5Component>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    const routes: Routes = [
      {
        path: 'comp4',
        component: AppComponent5Component,
        children: [
          {
            path: 'comp5',
            component: AppComponent5Component
          }
        ]
      }
    ];

    TestBed.configureTestingModule({
      declarations: [AppComponent5Component],
      imports: [SharedModule.forRoot(), RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent5Component);
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
