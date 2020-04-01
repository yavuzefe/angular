import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable } from 'rxjs';
// import 'rxjs/add/operators/delay';
// import 'rxjs/add/observable/of';
// import 'rxjs-compat/add/observable/of';

import { of as ObservableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Observable< Dish[]> {
    return ObservableOf(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return ObservableOf(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }
}