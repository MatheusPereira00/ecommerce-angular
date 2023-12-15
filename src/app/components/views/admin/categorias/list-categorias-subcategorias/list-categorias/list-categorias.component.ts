import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { RouterLink } from '@angular/router';
import { Category } from 'src/app/components/models/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-categorias',
  standalone: true,
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.scss'],
  imports: [CommonModule, DialogEditComponent, RouterLink],
})
export class ListCategoriasComponent implements OnInit, OnDestroy {
  public categories: Category[] = [];
  public id!: number;
  public subscription!: Subscription;
  public subscriptionGet!: Subscription;

  constructor(private categoriasService: CategoriasService) {}

  @ViewChild(DialogEditComponent)
  public dialogEditComponent!: DialogEditComponent;

  public ngOnInit(): void {
    this.getCategorys();
  }

  public getCategorys(): void {
    this.categoriasService.getCategorys().subscribe(data => {
      this.categories = data;
    });
  }

  public openModal(id: number): void {
    this.id = id;
    this.dialogEditComponent.toogleModal = true;
  }

  public close(): void {
    this.dialogEditComponent.toogleModal = false;
  }

  public delet(): void {
    this.subscription = this.categoriasService.deleteCategory(this.id).subscribe();

    this.subscriptionGet = this.categoriasService.getCategorys().subscribe(data => {
      this.categories = data;
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.subscriptionGet) this.subscriptionGet.unsubscribe();
  }
}
