import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  currentItem = true;
   test() {
    this.currentItem = !this.currentItem;
    console.log(this.currentItem);
  }
  customerArr: any[] = [];
  value=''
  onEnter(value: string) {
    this.value = value;
     this.customerArr.push(value);
     console.log(this.customerArr)
    }

}
