import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SubcategoriasService } from 'src/app/components/services/subcategorias.service';
import { subCategory } from 'src/app/components/models/subcategory';
import { Subscription, take } from 'rxjs';
import { DialogEditComponent } from '../list-categorias/dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-list-subcategorias',
  standalone: true,
  templateUrl: './list-subcategorias.component.html',
  styleUrls: ['./list-subcategorias.component.scss'],
  imports: [CommonModule, RouterLink, DialogEditComponent],
})
export class ListSubcategoriasComponent implements OnInit, OnDestroy {
  constructor(private subcategoriaService: SubcategoriasService) {}

  public subCategories: subCategory[] = [];
  public id!: number;
  private subscription!: Subscription;

  public ngOnInit(): void {
    this.getSubCategorys();
  }

  @ViewChild(DialogEditComponent)
  public dialogEditComponent!: DialogEditComponent;

  public getSubCategorys(): void {
    this.subscription = this.subcategoriaService.getSubCategorys().subscribe(data => {
      this.subCategories = data;
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
    this.subscription = this.subcategoriaService
      .deletesubCategory(this.id)
      .pipe(take(1))
      .subscribe();
    this.subcategoriaService.getSubCategorys().subscribe(data => {
      this.subCategories = data;
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
