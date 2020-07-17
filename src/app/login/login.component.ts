import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input () mail:string;
  @Input () Name:string;
  @Input () age:string;
  @Input () phone:string;
  @Input () contact:string;

  Form:FormGroup;
  validatorErrormsg={
    'email':{'required':'email is required'}
}
  constructor(private Rformbuilder:FormBuilder) { }

oncontact(selectedvalue:string){
  const phonecontrol=this.Form.get('phone');
  if(selectedvalue==='phone'){
    phonecontrol.setValidators(Validators.required)
  }
  else{
    phonecontrol.clearValidators();
  }
  phonecontrol.updateValueAndValidity();
}



  ngOnInit(): void {
    this.Form=this.Rformbuilder.group({
    'mail':[this.mail,[
      Validators.email
    ]],
    'Name':[this.Name,[
      Validators.required
     
    ]],
    'age':[this.age,[
      Validators.required,
     Validators.min(20)
    ]],
  'contact':['email',[
      Validators.required,]],
      
    'phone':['']
    })
}
}
 
