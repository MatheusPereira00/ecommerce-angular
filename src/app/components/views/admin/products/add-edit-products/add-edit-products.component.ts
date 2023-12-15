import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { Category } from 'src/app/components/models/category';
import { subCategory } from 'src/app/components/models/subcategory';
import { SubcategoriasService } from 'src/app/components/services/subcategorias.service';
import { CustomValidationMessageComponent } from '../../../custom-validation-message/custom-validation-message.component';
import { Subscription, take } from 'rxjs';
import { ProductService } from 'src/app/components/services/product.service';
import { Product } from 'src/app/components/models/product-interface';

@Component({
  selector: 'app-add-edit-products',
  standalone: true,
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    CustomValidationMessageComponent,
  ],
})
export class AddEditProductsComponent implements OnInit {
  public categories: Category[] = [];
  public subCategories: subCategory[] = [];
  public products: Product[] = [];
  public id!: string | null;
  public isEditMode = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private subCategoriasService: SubcategoriasService,
    private productsServie: ProductService,
    private activedRoute: ActivatedRoute
  ) {}

  public form: FormGroup = new FormGroup({});

  public ngOnInit(): void {
    this.getCategorys();
    this.getsubCategorys();
    this.form = this.fb.group({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      sku: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      unitPrice: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      category_name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      subcategory_name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      active: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      unitsInStock: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      urlImagem: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      descrição: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditMode = true;
      this.productsServie
        .getProductById(Number(this.id))
        .pipe(take(1))
        .subscribe(products => {
          this.form.patchValue({
            name: products[0].name,
            sku: products[0].sku,
            unitPrice: products[0].unitPrice,
            category_name: products[0].category_name,
            subcategory_name: products[0].subcategory_name,
            active: products[0].active,
            unitsInStock: products[0].unitsInStock,
          });
        });
    } else {
      this.isEditMode = false;
    }
  }

  public getCategorys(): void {
    this.categoriasService.getCategorys().pipe(take(1)).subscribe(data => {
      this.categories = data;
    });
  }

  public getsubCategorys(): void {
    this.subCategoriasService.getSubCategorys().pipe(take(1)).subscribe(data => {
      this.subCategories = data;
    });
  }
  public getProducts(): void {
    this.productsServie.getProduct().pipe(take(1)).subscribe(data => {
      this.products = data;
    });
  }

  public onSubmit(): void {
    if (this.isEditMode) {
      const formData = this.form.getRawValue();
      this.productsServie
        .updateProduct(Number(this.id!), formData)
        .pipe(take(1))
        .subscribe();
    }
    if (!this.isEditMode) {
      const formData = this.form.getRawValue();
      this.productsServie.postProduct(formData).pipe(take(1)).subscribe();
    }
    this.router.navigate(['adm/products']);
  }
}
