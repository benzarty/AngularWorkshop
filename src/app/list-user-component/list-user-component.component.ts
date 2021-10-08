
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})
export class ListUserComponent implements OnInit {
  props2= "test";
  search="";
  list : User[];
  listInitial : User[];
  constructor(private ac:ActivatedRoute) { }  //service nes kol tegedou donc tegedou mara barka

  ngOnInit(): void {
  
    
  
    //parammak ye3es 3la changement wa9teli yeji haw chnowa ya3mel
    //inscrit lil service héthika 
    // teraja3lek observable
      this.list=[
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
this.listInitial=this.list;
  this.ac.paramMap.subscribe(res=>
    {
      console.log(res.get('cat'));
  this.list=this.listInitial.filter((User) =>{return User.accountCategory === res.get('cat');
    })
  })
  //initialisi table ba3ed filtri 
  //ken 5aliw liste 9dima elle l ecrase liste filtrage //filtre javascpript
  //observable 7aja bech tetbadel wala des info bech yejiw ta3rafech wa9teh a tout moment yejiw un flou de données 
  
  }
  getUserCategory(c:string){
     if (c == 'Admin'){
       return true;
     }else{
       return false;
     }
  }

  deleteUser(x:number){
    this.list.splice(x,1);
  }
  changeValue(x:string){
    this.props2=x;
  }

}
