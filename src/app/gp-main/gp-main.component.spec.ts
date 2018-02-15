import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpMainComponent } from './gp-main.component';

describe('GpMainComponent', () => {
  let component: GpMainComponent;
  let fixture: ComponentFixture<GpMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
