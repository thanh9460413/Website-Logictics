// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from '../navbar/navbar.module'; // Import NavbarModule
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NavbarModule], // Thêm NavbarModule vào imports
})
export class HomeModule {}
