import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent2Component } from './app-component2.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent2Component', () => {
  let component: AppComponent2Component;
  let fixture: ComponentFixture<AppComponent2Component>;

  beforeEach(async(() => {
    const routes: Routes = [
      {
        path: 'comp2',
        component: AppComponent2Component
      }
    ];

    TestBed.configureTestingModule({
      declarations: [AppComponent2Component],
      imports: [
        SharedModule.forRoot(),
        RouterModule.forRoot(routes),
        HttpClientModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
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
