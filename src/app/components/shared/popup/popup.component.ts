import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  public tooglePopup = false;
  public toogleError = false;

  public openPopup(): void {
    this.tooglePopup = true;
  }

  public closePopup(): void {
    this.tooglePopup = false;
  }

  public openError(): void {
    this.toogleError = true;
  }
  public closeError(): void {
    this.toogleError = false;
  }
}
