import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 

  UserList: User[] = [];
  selectedUserId: string | null = null;
  

  constructor(private login:LoginService) {

  }
  ngOnInit(): void {
    this.getUserList();
    
  }
  getUserList() {
    this.login.getAllDataToServer().subscribe((el:any)=>{
      console.log(el.data);
      this.UserList=el.data;
    })

}

deleteUser(index: number) {
  const id = this.UserList[index].user_id;
  const endPoint = "remove_user/" + id;
  this.login.DeleteDataToServer(endPoint).subscribe((el: any) => {
    this.UserList.splice(index, 1);
  },
    error => {
    })
}

}
export interface User {
  user_id: string;
  user_name: string;
  user_email: String;
  user_phone_no: string;
  user_pwd: any;
  user_gender: string;
}

