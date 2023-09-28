import { Component } from '@angular/core';
import { FormControl, FormGroup,FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
loginForm=new FormGroup({
  user:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.email]),
})

loginCheck(){
  console.log(this.loginForm.value)
}
}
