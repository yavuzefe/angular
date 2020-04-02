import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor(dishService) {
        this.dishService = dishService;
    }
    onSelect(dish) {
        this.selectedDish = dish;
    }
    ngOnInit() {
        this.dishes = this.dishService.getDishes();
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map