// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar'; // Import NavbarModule
import { HomeComponent } from './home.page';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NavbarComponent], // Thêm NavbarModule vào imports
})
export class HomeModule {}
