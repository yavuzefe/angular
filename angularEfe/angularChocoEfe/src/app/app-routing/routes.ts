import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { DishsetailComponent } from '../menu/dishsetail/dishsetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
