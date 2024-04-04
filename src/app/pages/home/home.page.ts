import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomeComponent {}
