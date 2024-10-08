import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReportComponent } from './service-report.component';

describe('ServiceReportComponent', () => {
  let component: ServiceReportComponent;
  let fixture: ComponentFixture<ServiceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
