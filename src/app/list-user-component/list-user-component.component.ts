import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css'],
  // ki teged provider houni tetgad ken houni composant héthé w se8arou... ki te3ayteleha fi composant e5er ya9rahech
})
export class ListUserComponent implements OnInit {
  props2 = 'test';
  search = '';
  list: User[];
  listInitial: User[];
  passedparam:string; 
  constructor(private ac: ActivatedRoute,private us:UserService) {}  //tenajem teged new min fou9 ama ta5ser resurce // tetsama injection instance (moch ta5le9)

  ngOnInit(): void {
    //parammak ye3es 3la changement wa9teli yeji haw chnowa ya3mel
    //inscrit lil service héthika
    // teraja3lek observable
   
this.passedparam=this.ac.snapshot.paramMap.get('cat');


    // this.listInitial = this.list;
    // this.ac.paramMap.subscribe((res) => {
    //   console.log(res.get('cat'));
    //   this.list = this.listInitial.filter((User) => {
    //     return User.accountCategory === res.get('cat');
    //   });
    // }); 


this.us.getAllUsersFromDb().subscribe(res=>{
  this.list=res;
  this.listInitial=this.list;
  this.ac.paramMap.subscribe(
    res=>{
      console.log(res.get('cat')),
      this.list=this.listInitial.filter((user) =>{
        return user.accountCategory === res.get('cat');
     })
  }
)
});



    //initialisi table ba3ed filtri  //test
    //ken 5aliw liste 9dima elle l ecrase liste filtrage //filtre javascpript
    //observable 7aja bech tetbadel wala des info bech yejiw ta3rafech wa9teh a tout moment yejiw un flou de données
  }
  getUserCategory(c: string) {
    if (c == 'Admin') {
      return true;
    } else {
      return false;
    }
  }

  deleteUser(x: number) {
    this.list.splice(x, 1);
  }
  changeValue(x: string) {
    this.props2 = x;
  }
}
