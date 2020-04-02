import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
let DishService = class DishService {
    constructor() { }
    getDishes() {
        return DISHES;
    }
};
DishService = __decorate([
    Injectable()
], DishService);
export { DishService };
//# sourceMappingURL=dish.service.js.map