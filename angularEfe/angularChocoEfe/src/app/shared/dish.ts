import {Comment} from './comment';
import { from } from 'rxjs';

export class Dish {
  id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured:boolean;
    description: string;
    comments: Comment[];
  }