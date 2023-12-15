import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/search/search.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [SearchComponent, RouterLink],
})
export class HeaderComponent {
  public darkTheme!: string;

  constructor(public cartService: CartService) {}

  public onThemeSwitchChange(): void {
    document.body.classList.toggle('dark-theme');
  }
}
