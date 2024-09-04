import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPanelComponent } from './services-panel.component';

describe('ServicesPanelComponent', () => {
  let component: ServicesPanelComponent;
  let fixture: ComponentFixture<ServicesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
