import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportServiceFormComponent } from './report-service-form.component';

describe('ReportServiceFormComponent', () => {
  let component: ReportServiceFormComponent;
  let fixture: ComponentFixture<ReportServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportServiceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
