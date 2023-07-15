import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls: ['./resturants.component.scss']
})
export class ResturantsComponent {
  items :Product[]= [];
//ask about it 
  addItem(newItem: Product) {
    this.items.push(newItem);
    alert(this.items);
  }

}
