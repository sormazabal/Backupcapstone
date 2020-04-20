import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPendingComponent } from './delivery-pending.component';

describe('DeliveryPendingComponent', () => {
  let component: DeliveryPendingComponent;
  let fixture: ComponentFixture<DeliveryPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
