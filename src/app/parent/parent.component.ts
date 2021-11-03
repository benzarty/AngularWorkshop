import { Invoice } from './../models/invoice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myVal:String ="bonjour"
  
  invoices: Invoice[];

  constructor() { }

  ngOnInit(): void { 
    // mara barka tet3ayet 
    this.invoices =[
      { idInvoice: 1, discountAmount: 20, billAmount: 500, dateBill:
      "14/07/2021" , Status : true},
      { idInvoice: 2, discountAmount: 10, billAmount: 1000, dateBill:
      "02/10/2020" , Status : false},
      { idInvoice: 3, discountAmount: 50, billAmount: 200, dateBill:
      "15/12/2021" , Status : false},
      ]
  }
f(n:number)
{
  console.log(this.myVal)
}

}
