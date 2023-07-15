import { Component,Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() newProductEvent = new EventEmitter<Product>();

  addNewItem(value: any) {
    this.newProductEvent.emit(value);
    console.log(value.toString());
    alert(value);
  }
}
