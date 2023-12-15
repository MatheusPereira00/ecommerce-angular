import { Component } from '@angular/core';
import { HeaderComponent } from './components/core/header/header.component';
import { SidenavComponent } from './components/core/sidenav/sidenav.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, SidenavComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {}
