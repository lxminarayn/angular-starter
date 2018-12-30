import { NotFoundComponent } from './not-found.component';

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

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    const routes: Routes = [
      {
        path: 'comp4',
        component: NotFoundComponent,
        children: [
          {
            path: 'comp5',
            component: NotFoundComponent
          }
        ]
      }
    ];

    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [SharedModule.forRoot(), RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(NotFoundComponent);
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
