import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  myForm : FormGroup;
  mescnx:any=[];
  constructor() { }  
  // mathabik houni ken service 

  ngOnInit(): void {
    // initialisation houni famech declaratio
    this.myForm=new FormGroup({
      email:new FormControl("",[Validators.pattern("^[a-zA-Z0-9]{8,}?")]),
      pwd:new FormControl("",[Validators.pattern("^[a-zA-Z0-9]{8,}?")]),

    })






  }
  get myemails()
{
  //return this.myForm.get('email');
  return this.myForm.controls.email;
}
add()
{
  this.mescnx.push(this.myForm.value);
  console.log(this.mescnx);

  
}

}
