// home.module.ts
import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HomeRoutingModule } from './home-routing.module';
// import { NavbarModule } from '../navbar/navbar.module';
// import { NavbarModule } from '../../components/navbar/navbar.module';// Import NavbarModule
// import { HomeComponent } from './home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from './about/about.page';
import { WhyUsComponent } from './why-us/why-us.page';
import { ProjectComponent } from './project/project.page';
import { ContactComponent } from './contact/contact.page';
import { NewsComponent } from './news/news.page';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    AboutComponent,
    WhyUsComponent,
    ProjectComponent,
    ContactComponent,
    NewsComponent,
    FooterComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
// @NgModule({
//   declarations: [HomeComponent],
//   imports: [CommonModule, HomeRoutingModule, NavbarModule], // Thêm NavbarModule vào imports
// })
export class HomeModule {}
