import { User } from './../models/user';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form-component',
  templateUrl: './add-form-component.component.html',
  styleUrls: ['./add-form-component.component.css']
})
export class AddFormComponentComponent implements OnInit {

user : User=new User();
  constructor(private ac :ActivatedRoute) {}

  ngOnInit(): void {

    //paramMap bech te5ou info 3la parametre 
    //observable :gerer les données asynchrone : on ne sait pas les données quant il arrivent 
    this.ac.paramMap.subscribe(res=>
      {
        console.log(res.get('id'));
      }),errors=>{console.log(errors)}
    
  }

  getall()
  {
    console.log(this.user);
  }



  }






