// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
// @Input()
  dish: Dish;
  constructor(private dishservice: DishService,
    @Inject('BaseURL') public BaseURL,
    private route: ActivatedRoute,
    private location: Location) { }
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
 }
  goBack(): void {
    this.location.back();
  }

}
