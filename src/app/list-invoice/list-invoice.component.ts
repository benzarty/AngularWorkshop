import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {
  invoices:Invoice[];
  invoiceToEditParent:Invoice;
  showAdd = false;
  nb=5;
  constructor() { }
  show=false;
  ngOnInit(): void {
    this.invoices =[
      { idInvoice: 1, discountAmount: 20, billAmount: 500, dateBill: "14/07/2021" , Status : true,like:50},
      { idInvoice: 2, discountAmount: 10, billAmount: 1000, dateBill: "02/10/2020" , Status : false,like:50},
      { idInvoice: 3, discountAmount: 50, billAmount: 200, dateBill: "15/12/2021" , Status : false,like:50},
  
      ]
  
  }
  editInvoice(x:Invoice){
    this.show=true;
    this.invoiceToEditParent=x;
    
  }
  editMyInvoice(i:any){
    for (let k in this.invoices){
      if (this.invoices[k].idInvoice == i.idInvoice){
        this.invoices[k]=i;
      }
    }


    
  }
  showForm(){
    this.showAdd=true;
  }
  addInvoice(i:Invoice){
this.invoices.push(i);
  }
}