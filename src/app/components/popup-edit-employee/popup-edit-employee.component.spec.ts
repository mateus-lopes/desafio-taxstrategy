import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditEmployeeComponent } from './popup-edit-employee.component';

describe('PopupEditEmployeeComponent', () => {
  let component: PopupEditEmployeeComponent;
  let fixture: ComponentFixture<PopupEditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupEditEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
