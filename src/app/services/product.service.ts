import { Product } from './../models/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
   //ki yetsna3 composant racine yetsna3 instance héthi me3aha donc na7na ba3ed just bech injectiw
// ki t7ot providedin root composant kol yesta3melouha w ken tesami fiha wa7da donc ken héthika w children mete3ou
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
        

        getProductById(id: number): Observable<Product> {
          return this.myhttp.get<Product>(this.productsUrl +'/'+ id); }


          updateProduct (id: number, product: Product): Observable<Product> {
            return this.myhttp.put<Product>(this.productsUrl+'/'+ id, product, this.httpOptions);
            }

}
