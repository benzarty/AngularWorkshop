import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
  myForm:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idInvoice:new FormControl(""),  //validatiotor synchrone,3:validator asynchrone
      discountAmount:new FormControl("",),
      billAmount:new FormControl(""),
      dateBill:new FormControl(""),
      Status:new FormControl(""),



      })

    }
  
}


