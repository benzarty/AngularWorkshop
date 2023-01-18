import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable( //provider
 { providedIn : 'root'}  

)
export class UserService {

  url ='http://localhost:3000/users'
  constructor(private myhttp:HttpClient) { }


  getAllUsersFromDb() : Observable<User[]>{
    return this.myhttp.get<User[]>(this.url);
  }
 
}