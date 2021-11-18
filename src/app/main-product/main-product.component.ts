import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from './../services/product.service';
import { Product } from './../models/Product';
import { Component, OnInit, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit, OnChanges {
  formGeneral: FormGroup;

  list: Product[];
  Product: Product;
  constructor(private us: ProductService, private router: Router,private uss: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllProducts();
    this.uss.paramMap.subscribe(next=>this.us.getProductById(Number(next.get('id'))).subscribe(res=>{this.Product=res}), error=>console.log(error));
      


    //on changes no 5ater famech variable d entre sortie 


    this.formGeneral = new FormGroup({
      id: new FormControl("", [Validators.required]),
      code: new FormControl("", [Validators.required]),
      libelle: new FormControl("", [Validators.required]),
      PrixUnitaire: new FormControl("", [Validators.required]),
      tauxTVA: new FormControl("", [Validators.required]),



    });



  }

  ngOnChanges() {

    console.log("je suis le changes")

  }

  getAllProducts() {
    this.us.getProducts().subscribe(res => {
      this.list = res;
    });
  }




  deleteProduct(p: Product) {
    this.us.deleteProduct(p).subscribe(res => {
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


}
