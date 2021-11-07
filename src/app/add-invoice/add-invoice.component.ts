import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<Invoice>();
  constructor() { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idInvoice:new FormControl(),
      discountAmount: new FormControl(),
      billAmount: new FormControl(),
      dateBill: new FormControl(),
      Status: new FormControl(),
    }) 
  }
add(){
this.aded.emit(this.myForm.value);
this.myForm.reset();
}
}
