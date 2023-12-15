import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubcategoriasComponent } from './list-subcategorias.component';

describe('ListSubcategoriasComponent', () => {
  let component: ListSubcategoriasComponent;
  let fixture: ComponentFixture<ListSubcategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListSubcategoriasComponent]
    });
    fixture = TestBed.createComponent(ListSubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
