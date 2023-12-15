import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Category } from 'src/app/components/models/category';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { SubcategoriasService } from 'src/app/components/services/subcategorias.service';

@Component({
  selector: 'app-add-edit-subactegory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './add-edit-subactegory.component.html',
  styleUrls: ['./add-edit-subactegory.component.scss'],
})

export class AddEditSubactegoryComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public id!: string | null;
  private subscription!: Subscription;
  public isEditMode = false;
  public categories: Category[] = [];

  constructor(
    private activedRoute: ActivatedRoute,
    private subCategoriasService: SubcategoriasService,
    private categoriaService: CategoriasService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getCategorys();
    this.form = this.fb.group({
      nameCategory: ['', Validators.required],
      nameSubCategory: ['', Validators.required],
    });

    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditMode = true;
      this.subCategoriasService
        .getsubCategoryById(Number(this.id))
        .pipe(take(1))
        .subscribe(subCategory => {
          this.form.patchValue({
            nameCategory: subCategory[0].nameCategory,
            nameSubCategory: subCategory[0].nameSubCategory,
          });
        });
    } else {
      this.isEditMode = false;
    }
  }

  public onSubmit(): void {
    if (this.isEditMode) {
      const formData = this.form.getRawValue();
      this.subCategoriasService
        .updatesubCategory(Number(this.id!), formData)
        .pipe(take(1))
        .subscribe();
    }
    if (!this.isEditMode) {
      const formData = this.form.getRawValue();
      this.subCategoriasService.postsubCategory(formData).pipe(take(1)).subscribe();
    }
    this.router.navigate(['adm/categories']);
  }

  public getCategorys(): void {
    this.subscription = this.categoriaService.getCategorys().subscribe(data => {
      this.categories = data;
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
