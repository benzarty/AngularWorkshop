import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
  show=false;
  @Input() invoiceToEdit:Invoice;
  @Input() prop2:number;
  @Output() edited = new EventEmitter<Invoice>();
  constructor() { }
  myForm:UntypedFormGroup;
  // ngoninit mara barka ahawka 3leh tetbadalch
  ngOnInit(): void {
    console.log("ngOnInit");
    //ngoninit tetgad barcha marat tenajem moch kima ngonchange
    
  }
  // ngonChanges te5dem ken ki 7aja tetbadel min parent(lezem input bech te5dem) wala te3adiha ama wa9teha mara barka ken tebadalhech 5aterha teraci ken les changements 
  //ng onchanged 9ebal oninit
  // SimpleChanges bech te5arej info minha 
  ngOnChanges(changes:SimpleChanges){
    //tegedeha houni bech te3awedech code martin fil ngoninit 5ater tableau yetbadel
    console.log(changes);  //esm proprité w type SimpleChange wa7da 
    if (changes.invoiceToEdit.firstChange){
    this.myForm=new UntypedFormGroup({
      id:new UntypedFormControl({"value":this.invoiceToEdit.idInvoice,"disabled":true}),
      discount: new UntypedFormControl(this.invoiceToEdit.discountAmount,Validators.required),
      bill: new UntypedFormControl(this.invoiceToEdit.billAmount,Validators.required),
      date: new UntypedFormControl(this.invoiceToEdit.dateBill,Validators.maxLength(3)),
      status: new UntypedFormControl(this.invoiceToEdit.Status,Validators.maxLength(3)),
    }) 
  }else{
    this.myForm.setControl('id',new UntypedFormControl(this.invoiceToEdit.idInvoice));
    this.myForm.setControl('discount',new UntypedFormControl(this.invoiceToEdit.discountAmount));
    this.myForm.setControl('bill',new UntypedFormControl(this.invoiceToEdit.billAmount));
    this.myForm.setControl('date',new UntypedFormControl(this.invoiceToEdit.dateBill));
    this.myForm.setControl('status',new UntypedFormControl(this.invoiceToEdit.Status));
  }
  }
  edit(){
   // console.log(this.myForm.value);  recupere que les champs active moch disbled
   console.log(this.myForm.getRawValue()); 
   let myi=new Invoice();
   //esemi control name fil html
   myi.idInvoice=this.myForm.get('id').value;
   myi.discountAmount=this.myForm.get('discount').value;
   myi.dateBill=this.myForm.get('date').value;
   myi.billAmount=this.myForm.get('bill').value;
   myi.Status=this.myForm.get('status').value;
   this.edited.emit(myi);
  }
}

