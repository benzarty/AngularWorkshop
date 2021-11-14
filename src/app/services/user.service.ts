import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
 { providedIn : 'root'}   //ki yetsna3 composant racine yetsna3 instance héthi me3aha donc na7na ba3ed just bech injectiw
// ki t7ot providedin composant kol yesta3melouha w ken tesami fiha wa7da donc ken héthika w children mete3ou

)
export class UserService {

  constructor(private myhttp:HttpClient) { }


  getAllUsersFromDb() : Observable<User[]>{
    return this.myhttp.get<User[]>('http://localhost:3000/users');
  }
  getAllUsers(){
    return [
      {
        idCustomer: 1,
        firstName: "Mila",
        lastName: " Kunis",
        birthDate: "1999-06-30",
        accountCategory: "Admin",
        email: "mila@kunis.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 2,
        firstName: "George",
        lastName: "Clooney",
        birthDate: "1999-06-30",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 3,
        firstName: "George",
        lastName:  "Clooney",
        birthDate: "1999-06-30",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 4,
        firstName: "Ryan",
        lastName:  "Gossling",
        birthDate:"1999-06-30",
        accountCategory: "Golden",
        email: "Ryan@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
        profession: "Software Engineer"
      },
      {
        idCustomer: 5,
        firstName: "Robert",
        lastName:  "Downey",
        birthDate: "1999-06-30",
        accountCategory: "Blocked Account",
        email: "robert@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
        profession: "Software Engineer"
      }

]
  }
}