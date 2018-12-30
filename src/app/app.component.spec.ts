import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared/shared.module';
import { Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import {RouterTestingModule} from '@angular/router/testing';


describe('AppComponent', () => {
  beforeEach(async(() => {
    const routes: Routes = [
      {
        path: '',
        component: AppComponent
      }
    ];


    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [SharedModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'ng-starter-kit'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ng-starter-kit');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-starter-kit!');
  // }));
});
