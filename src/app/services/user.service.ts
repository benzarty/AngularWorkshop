import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable( //provider
 { providedIn : 'root'}   //ki yetsna3 composant racine yetsna3 instance héthi me3aha donc na7na ba3ed just bech injectiw
// ki t7ot providedin root composant kol yesta3melouha w ken tesami fiha wa7da donc ken héthika w children mete3ou

)
export class UserService {

  url ='http://localhost:3000/users'
  constructor(private myhttp:HttpClient) { }


  getAllUsersFromDb() : Observable<User[]>{
    return this.myhttp.get<User[]>(this.url);
  }
 
}