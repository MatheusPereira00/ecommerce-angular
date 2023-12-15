import { Routes } from '@angular/router';
import { ProductComponent } from './components/views/product/product.component';
import { CartComponent } from './components/views/cart/cart.component';
import { CheckoutComponent } from './components/views/checkout/checkout.component';
import { CreateAccountComponent } from './components/views/account/create-account/create-account.component';
import { LoginComponent } from './components/views/account/login/login.component';
import { AdmComponent } from './components/views/admin/adm/adm.component';
import { ListCategoriasSubcategoriasComponent } from './components/views/admin/categorias/list-categorias-subcategorias/list-categorias-subcategorias.component';
import { LogoutComponent } from './components/shared/logout/logout/logout.component';
import { AddEditCategoryComponent } from './components/views/admin/categorias/list-categorias-subcategorias/list-categorias/add-edit-category/add-edit-category.component';
import { AddEditSubactegoryComponent } from './components/views/admin/categorias/list-categorias-subcategorias/list-subcategorias/add-edit-subactegory/add-edit-subactegory.component';
import { ListProductsComponent } from './components/views/admin/products/list-products/list-products.component';
import { AddEditProductsComponent } from './components/views/admin/products/add-edit-products/add-edit-products.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];

export const cartRoutes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
];

export const checkoutRoutes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
];

export const accountRoutes: Routes = [
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create',
    component: CreateAccountComponent,
  },
];

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdmComponent,
  },
  {
    path: 'categories',
    component: ListCategoriasSubcategoriasComponent,
  },
  {
    path: 'categories/edit/:id',
    component: AddEditCategoryComponent,
  },
  {
    path: 'categories/add',
    component: AddEditCategoryComponent,
  },
  {
    path: 'categories/subcategories/edit/:id',
    component: AddEditSubactegoryComponent,
  },
  {
    path: 'categories/subcategories/add',
    component: AddEditSubactegoryComponent,
  },
  {
    path: 'products',
    component: ListProductsComponent,
  },
  {
    path: 'product/add',
    component: AddEditProductsComponent,
  },
  {
    path: 'product/edit/:id',
    component: AddEditProductsComponent,
  },
];
