import {Comment} from './comment';
import { from } from 'rxjs';

export class Dish {
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
  }