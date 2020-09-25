import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators,FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  loginForm = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]
  });
  
  errMessage = {
    username: [
      { type: 'required', message: 'Username is required.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
    ]
  };

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.loginForm.valid){
      this.router.navigateByUrl('/listLeave');
    }else{
      alert("Please enter username and password")
    }
  }

}
