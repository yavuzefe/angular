import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Dish } from '../../shared/dish';
let DishsetailComponent = class DishsetailComponent {
    constructor() {
        this.dish = Dish;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DishsetailComponent.prototype, "dish", void 0);
DishsetailComponent = __decorate([
    Component({
        selector: 'app-dishsetail',
        templateUrl: './dishsetail.component.html',
        styleUrls: ['./dishsetail.component.css']
    })
], DishsetailComponent);
export { DishsetailComponent };
//# sourceMappingURL=dishsetail.component.js.map