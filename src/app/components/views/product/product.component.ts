import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CardComponent } from '../card/card.component';
import { LoginComponent } from '../account/login/login.component';
import { Product } from '../../models/product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CardComponent, NgFor, LoginComponent],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  public products: Product[] = [];

  public isDarkTheme = true;

  constructor(private productService: ProductService, private cartService: CartService) {}

  public ngOnInit(): void {
    this.getProduct();
    const theme = localStorage.getItem('theme');
    if (theme) {
      if (theme === 'true') {
        this.isDarkTheme = true;
        document.body.setAttribute('data-theme', 'dark');
      } else {
        document.body.setAttribute('data-theme', 'theme');
        this.isDarkTheme = false;
      }
    }
  }

  public getProduct(): void {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
