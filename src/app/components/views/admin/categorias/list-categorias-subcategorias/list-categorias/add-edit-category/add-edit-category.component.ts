import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-edit-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss'],
})
export class AddEditCategoryComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public id!: string | null;
  public isEditMode = false;

  constructor(
    private activedRoute: ActivatedRoute,
    private categoriasService: CategoriasService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });

    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditMode = true;
      this.categoriasService
        .getCategoryById(Number(this.id))
        .pipe(take(1))
        .subscribe(category => {
          this.form.patchValue({ name: category[0].name });
        });
    } else {
      this.isEditMode = false;
    }
  }

  public onSubmit(): void {
    if (this.isEditMode) {
      const formData = this.form.getRawValue();
      this.categoriasService
        .updateCategory(Number(this.id!), formData)
        .pipe(take(1))
        .subscribe();
    }
    if (!this.isEditMode) {
      const formData = this.form.getRawValue();
      this.categoriasService.postCategory(formData).pipe(take(1)).subscribe();
    }
    this.router.navigate(['adm/categories']);
  }
}
