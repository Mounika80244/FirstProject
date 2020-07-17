import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
RegisterForm:FormGroup;
  
  @Input () email:string;
  @Input () password:string;
 
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.RegisterForm=this.formbuilder.group({
    'email':[this.email,[
      Validators.required,
      Validators.email
    ]],
    'password':[this.password,[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]]
    })
  }
submit(){
  alert(this.email+' '+"registered");
}
}

