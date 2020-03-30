import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishService } from './services/dish.service';
import { DishsetailComponent } from './menu/dishsetail/dishsetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishsetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
