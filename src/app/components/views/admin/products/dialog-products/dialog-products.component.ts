import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/components/services/product.service';
import { Product } from 'src/app/components/models/product-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-products.component.html',
  styleUrls: ['./dialog-products.component.scss'],
})
export class DialogProductsComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public toogleModal = false;
  @Output() public close = new EventEmitter();
  @Output() public delet = new EventEmitter();
  public subscription!: Subscription;

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.subscription = this.productService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public openDialog(): void {
    this.toogleModal = true;
  }

  public closeModal(): void {
    this.close.emit();
  }

  public deleteProduct(): void {
    this.delet.emit();
    this.close.emit();
  }
}
