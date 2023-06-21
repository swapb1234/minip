import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUser:boolean = false;

  baseUrl:string="https://devrunner.co.in/machine_test/index.php/web_api/Users/";
  

  httpHeader:HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { 
   
  }

  isUserLoggedIn(){
    //real time will be differrnt logic is here..

    return this.loginUser=true;
   }


  getDatatoServer(endPoint:any){
    const url = this.baseUrl + endPoint;
    return this.http.get(url)
  }

  getAllDataToServer(){
    return this.http.get(this.baseUrl);
  }

  saveDataToServer(endPoint:string, body:any){
    const url = this.baseUrl + endPoint;
    return this.http.post(url, body);
   }
   DeleteDataToServer(endPoint:any){
    const url = this.baseUrl + endPoint;
    return this.http.delete(url, {headers:this.httpHeader});
  }
   
}












































// getDataToServer(ParamValue:string){
  //   const queryParam= new HttpParams().set('login', ParamValue)
  //   return this.http.get(this.baseUrl, {headers:this.httpHeader, params:queryParam})
  // }