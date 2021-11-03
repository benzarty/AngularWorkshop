import { Invoice } from './../models/invoice';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit,OnChanges {
@Input() prop1:String;
@Input() invoice:Invoice
aaa:number =56

@Input() initialValue : string
//emitter min core
@Output() notified=new EventEmitter<number>()
@Output() prefixed = new EventEmitter<string>();

// number bech te9oul type retour
  constructor() { console.log("je suis le constructuer")}

  ngOnInit(): void {
    console.log("je suis le nginit")
  }

  ngOnChanges()
  {
    
    console.log("je suis le changes")

  }
  sendNotif()
  {
   
    this.notified.emit(this.aaa); //lezemou type number 
  }
  
  
}
