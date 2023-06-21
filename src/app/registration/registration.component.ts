import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  RegistrationForm!: FormGroup;

constructor(private fb:FormBuilder, private http:LoginService){

}
  ngOnInit(): void {
    this.CreateUser();
  }

  CreateUser(){
    this.RegistrationForm = this.fb.group({
      "user_name":['',[Validators.required]],
      "user_email":['',[Validators.required]],
      "user_contact_no":['',[Validators.required]],
      "user_password":['',[Validators.required]],
      "user_gender":['',[Validators.required]]
    })
  }



  save(){
    var obj = new FormData();
    obj.set('user_name', this.RegistrationForm.get('user_name')?.value);
    obj.set('user_email', this.RegistrationForm.get('user_email')?.value);
    obj.set('user_contact_no', this.RegistrationForm.get('user_contact_no')?.value);
    obj.set('user_password', this.RegistrationForm.get('user_password')?.value);
    obj.set('user_gender', this.RegistrationForm.get('user_gender')?.value);

    console.log(this.RegistrationForm.value);
    alert("Data saved Successfully");
    this.http.saveDataToServer("Register", obj).subscribe((el)=>{
      console.log(el);
    })

    
  
}
}