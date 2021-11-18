import { ProductService } from './../services/product.service';
import { Product } from './../models/Product';
import { Component, OnInit, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit,OnChanges {

  list:Product[];
  constructor(private us:ProductService) { }

  ngOnInit(): void {

    this.us.getProducts().subscribe(res=>{
      this.list=res;
    });

//on changes no 5ater famech variable d entre sortie 
  }
  
  ngOnChanges()
  {
    
    console.log("je suis le changes")

  }
 

  

    
  deleteProduct(p:Product){
    this.us.deleteProduct(p).subscribe();
    this.us.getProducts().subscribe(res=>{
      this.list=res;
    });
   }

   

}
