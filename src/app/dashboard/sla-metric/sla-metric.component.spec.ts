import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaMetricComponent } from './sla-metric.component';

describe('SlaMetricComponent', () => {
  let component: SlaMetricComponent;
  let fixture: ComponentFixture<SlaMetricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaMetricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
