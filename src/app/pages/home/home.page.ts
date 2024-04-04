import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from './about/about.page';
import { WhyUsComponent } from './why-us/why-us.page';
import { ContactComponent } from './contact/contact.page';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, WhyUsComponent, ContactComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomeComponent {}
