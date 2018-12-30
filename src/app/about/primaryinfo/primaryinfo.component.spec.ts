import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryinfoComponent } from './primaryinfo.component';

describe('PrimaryinfoComponent', () => {
  let component: PrimaryinfoComponent;
  let fixture: ComponentFixture<PrimaryinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
