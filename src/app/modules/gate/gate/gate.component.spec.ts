import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateComponent } from './gate.component';

describe('GateComponent', () => {
  let component: GateComponent;
  let fixture: ComponentFixture<GateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GateComponent]
    });
    fixture = TestBed.createComponent(GateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
