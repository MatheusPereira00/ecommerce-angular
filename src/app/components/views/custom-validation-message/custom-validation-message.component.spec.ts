import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationMessageComponent } from './custom-validation-message.component';

describe('CustomValidationMessageComponent', () => {
  let component: CustomValidationMessageComponent;
  let fixture: ComponentFixture<CustomValidationMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomValidationMessageComponent]
    });
    fixture = TestBed.createComponent(CustomValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
