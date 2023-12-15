import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/components/services/product.service';

import { RouterLink } from '@angular/router';
import { Product } from 'src/app/components/models/product-interface';
import { DialogProductsComponent } from '../dialog-products/dialog-products.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-products',
  standalone: true,
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  imports: [CommonModule, RouterLink, DialogProductsComponent],
})
export class ListProductsComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public id!: number;
  public subscription!: Subscription;
  public subscriptionDelet!: Subscription;

  constructor(private productsServie: ProductService) {}

  @ViewChild(DialogProductsComponent)
  public dialogProductsComponent!: DialogProductsComponent;

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.subscription = this.productsServie.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  public openModal(id: number): void {
    this.id = id;
    this.dialogProductsComponent.toogleModal = true;
  }

  public close(): void {
    this.dialogProductsComponent.toogleModal = false;
  }

  public delet(): void {
    this.subscriptionDelet = this.productsServie.deleteProduct(this.id).subscribe();
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscriptionDelet?.unsubscribe();
  }
}
