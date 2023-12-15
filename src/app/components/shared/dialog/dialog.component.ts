import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product-interface';
import { NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class DialogComponent {
  @Input() public image = '';
  @Output() public close = new EventEmitter();

  public toogleModal = false;
  public currentProduct!: Product;

  constructor(private cartService: CartService) {}

  public openDialog(): void {
    this.toogleModal = true;
  }

  public closeModal(): void {
    this.close.emit();
  }

  public confirmar(): void {
    this.cartService.addToCart(this.currentProduct);
    this.toogleModal = false;
    this.close.emit();
  }
}
