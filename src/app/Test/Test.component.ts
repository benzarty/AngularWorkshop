import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css']
})
export class TestComponent implements OnInit {

  prop1 : String ="lets go";
  price : number=24;  //lezem specify type


  constructor() { }

  ngOnInit() {

  
  }
  getVal(t:number)
  {
    console.log("gogo"+t);
    // one way 
  }
  getColor()
  {
    if(this.price<20)
    {
      return 'green' ;
    
    }
    return 'red';
  }
  getClass()
  {
    if(this.price<20)
    {
      return 'style1' ;
    
    }
    return 'style2';

  }
}
