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
      email:new FormControl("",[Validators.email,Validators.required,Validators.minLength(3)]),  //validatiotor synchrone,3:validator asynchrone
      pwd:new FormControl("",[Validators.pattern("^[a-zA-Z0-9]{8,}?"),Validators.required,Validators.minLength(3)]),
      adress:new FormGroup({street:new FormControl(),city : new FormControl()

      })

    })


  }
  get myemails()
{
  //return this.myForm.get('email');
  return this.myForm.controls.email ;
}
add()
{
  this.mescnx.push(this.myForm.value);
  console.log(this.mescnx);

  
}
reset()
{
  this.myForm.reset();
}

}
