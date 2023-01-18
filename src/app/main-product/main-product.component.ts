import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ProductService } from './../services/product.service';
import { Product } from './../models/Product';
import { Component, OnInit, SimpleChange, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit, OnChanges,OnDestroy {
  formGeneral: UntypedFormGroup;

  errors:string;
  ob:Subscription

  list: Product[];
  Product: Product;
  constructor(private us: ProductService, private router: Router,private uss: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllProducts();
    this.uss.paramMap.subscribe(next=>this.us.getProductById(Number(next.get('id'))).subscribe(res=>{this.Product=res}), error=>console.log(error));
      


    //on changes no 5ater famech variable d entre sortie 


    this.formGeneral = new UntypedFormGroup({
      id: new UntypedFormControl("", [Validators.required]),
      code: new UntypedFormControl("", [Validators.required]),
      libelle: new UntypedFormControl("", [Validators.required]),
      PrixUnitaire: new UntypedFormControl("", [Validators.required]),
      tauxTVA: new UntypedFormControl("", [Validators.required]),



    });



  }

  ngOnChanges() {

    console.log("je suis le changes")

  }

  getAllProducts() {
    this.us.getProducts().subscribe(res => {
      this.list = res;
    }, error => {
      this.errors = error
      console.log(error);
  });
  }

  // getAllProducts2() {
  //   this.us.getProducts().subscribe(res => {
  //     this.list = res;
  //   });
  // }




  deleteProduct(p: Product) {
    this.ob=this.us.deleteProduct(p).subscribe(res => {
      this.getAllProducts()
    });

  }


  save() {



    this.us.addProduct(this.formGeneral.value).subscribe(res => {
      console.log('Product created!');
      this.getAllProducts()
      /* this.router.navigateByUrl('/home'); */
})

  }

  update(){
    this.us.updateProduct(this.Product.id,this.Product).subscribe();}

    ngOnDestroy(){

this.ob.unsubscribe();
//Unsubscribe Observable To Resolve Memory Leak:

    }


}
