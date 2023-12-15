import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { Category } from 'src/app/components/models/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog-edit',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponent implements OnDestroy {
  @Output() public close = new EventEmitter();
  @Output() public delet = new EventEmitter();
  public toogleModal = false;
  public categories: Category[] = [];
  public subscription!: Subscription;

  constructor(private categoriasService: CategoriasService) {}

  public openDialog(): void {
    this.toogleModal = true;
  }

  public closeModal(): void {
    this.close.emit();
  }

  public deleteCategory(): void {
    this.delet.emit();
    this.toogleModal = false;
    this.close.emit();
  }

  public getCategorys(): void {
    this.subscription = this.categoriasService.getCategorys().subscribe(data => {
      this.categories = data;
    });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
