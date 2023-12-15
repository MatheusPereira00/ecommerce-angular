import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubactegoryComponent } from './add-edit-subactegory.component';

describe('AddEditSubactegoryComponent', () => {
  let component: AddEditSubactegoryComponent;
  let fixture: ComponentFixture<AddEditSubactegoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditSubactegoryComponent],
    });
    fixture = TestBed.createComponent(AddEditSubactegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
