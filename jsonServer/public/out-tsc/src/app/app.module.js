import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishService } from './services/dish.service';
import { DishsetailComponent } from './menu/dishsetail/dishsetail.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map