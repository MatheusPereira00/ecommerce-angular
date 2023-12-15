import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product-interface';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class CartComponent implements OnInit {
  public products: Product[] = [];

  public allProductCart = this.cartService.getItems();

  constructor(public cartService: CartService, private router: Router) {}

  public ngOnInit(): void {
    this.cartService.getItems();
  }

  public checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
