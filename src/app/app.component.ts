import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  color:any
  clickMassage:any
  darktheme = "dark"
  swtichMode:string="dark mode" 
  setMode:boolean = false
  setBtn:boolean = true
  themeChange= `light`
  receiveMode() {
    this.setMode!=this.setMode;
    if(this.setMode==true){
      this.setMode = false;
      this.darktheme = "dark"
      this.themeChange="light"
 
      this.setBtn= true
      this.swtichMode="dark mode" 
    }else if(this.setMode==false){
      this.setMode =true
      this.darktheme="light";
      this.themeChange="dark"
      this.setBtn=false
      this.swtichMode="light mode" 
    }
  }
  constructor(){
  }

  

 
}
