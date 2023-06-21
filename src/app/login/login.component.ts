import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login!: FormGroup;

  constructor(private fb: FormBuilder, private http: LoginService, private router:Router) {

  }
  ngOnInit(): void {
    this.CreateUser();
  }

  CreateUser() {
    this.Login = this.fb.group({
      "user_email": ['', []],
      "user_pwd": ['', []]
    })
  }
  login() {
     console.log(this.Login.value);
    let endPoint = 'login?' + 'user_email=' +  this.Login.get('user_email')?.value + "&" + 'user_pwd='+this.Login.get('user_pwd')?.value
    this.http.getDatatoServer(endPoint).subscribe((el:any)=>{
      console.log(el);
      if(el.status != 0){
       
        this.router.navigate(['/Home']);
        this.http.isUserLoggedIn();
      }else{
        alert("Invalid credentials..");
      }
    })
  }
}
