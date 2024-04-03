import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.page';
import { NavbarComponent } from './components/navbar/navbar.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];
