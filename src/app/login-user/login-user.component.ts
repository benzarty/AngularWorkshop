import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  myForm : UntypedFormGroup; 
  mescnx:any=[];
  constructor() { }  
  // mathabik houni ken service 

  ngOnInit(): void {
    // initialisation houni famech declaratio
    this.myForm=new UntypedFormGroup({
      email:new UntypedFormControl("",[Validators.email,Validators.required,Validators.minLength(3)]),  //validatiotor synchrone,3:validator asynchrone
      pwd:new UntypedFormControl("",[Validators.pattern("^[a-zA-Z0-9]{8,}?"),Validators.required,Validators.minLength(3)]),
      adress:new UntypedFormGroup({street:new UntypedFormControl(),city : new UntypedFormControl()

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
