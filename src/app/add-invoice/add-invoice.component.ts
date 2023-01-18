import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  myForm :UntypedFormGroup;
  @Output() aded = new EventEmitter<Invoice>();
  constructor() { }

  ngOnInit(): void {
    this.myForm=new UntypedFormGroup({
      
      idInvoice:new UntypedFormControl(),
      discountAmount: new UntypedFormControl(),
      billAmount: new UntypedFormControl(),
      dateBill: new UntypedFormControl(),
      Status: new UntypedFormControl(),
    }) 
  }
add(){
this.aded.emit(this.myForm.value);
this.myForm.reset();
}
}
