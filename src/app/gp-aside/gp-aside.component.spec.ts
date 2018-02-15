import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpAsideComponent } from './gp-aside.component';

describe('GpAsideComponent', () => {
  let component: GpAsideComponent;
  let fixture: ComponentFixture<GpAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
