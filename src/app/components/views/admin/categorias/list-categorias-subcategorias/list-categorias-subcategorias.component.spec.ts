import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriasSubcategoriasComponent } from './list-categorias-subcategorias.component';

describe('ListCategoriasSubcategoriasComponent', () => {
  let component: ListCategoriasSubcategoriasComponent;
  let fixture: ComponentFixture<ListCategoriasSubcategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListCategoriasSubcategoriasComponent],
    });
    fixture = TestBed.createComponent(ListCategoriasSubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
