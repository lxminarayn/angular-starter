import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent3Component } from './app-component3.component';
import { SharedModule } from '@app/shared/shared.module';
import { Routes } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent3Component', () => {
  let component: AppComponent3Component;
  let fixture: ComponentFixture<AppComponent3Component>;

  beforeEach(async(() => {
    const routes: Routes = [
      {
        path: 'comp3',
        component: AppComponent3Component
      }
    ];

    TestBed.configureTestingModule({
      declarations: [AppComponent3Component],
      imports: [
        SharedModule.forRoot(),
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        ScrollingModule,
        SharedModule.forRoot(),
        CommonModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent3Component);
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
