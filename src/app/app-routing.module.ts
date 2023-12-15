import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadChildren: () => import('./routes.module').then(m => m.productsRoutes),
  },
  {
    path: 'cart',
    loadChildren: () => import('./routes.module').then(m => m.cartRoutes),
  },
  {
    path: 'checkout',
    loadChildren: () => import('./routes.module').then(m => m.checkoutRoutes),
  },
  {
    path: 'account',
    loadChildren: () => import('./routes.module').then(m => m.accountRoutes),
  },
  {
    path: 'adm',
    loadChildren: () => import('./routes.module').then(m => m.adminRoutes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
