import { Product } from './../models/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  productsUrl : string = "/api/products";

  constructor(private myhttp:HttpClient) { }


  
  getProducts() : Observable<Product[]>{
    return this.myhttp.get<Product[]>(this.productsUrl);
  }

  deleteProduct (product: Product): Observable<Product> {
    const url=this.productsUrl+'/'+ product.id;
    return this.myhttp.delete<Product>(url);
    }
    addProduct (product: Product): Observable<Product> {
      return this.myhttp.post<Product>(this.productsUrl, product, this.httpOptions);}

      httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
        }
        
}
