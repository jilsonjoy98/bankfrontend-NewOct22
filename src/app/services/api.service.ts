import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // register
  register(uname:any,acno:any,pswd:any){
const body={
  uname,
  acno,
  pswd
}
// server call to register an return response to register component
   return this.http.post('http://localhost:3000/register',body)
  }
  // login
  login(acno:any,pswd:any){
    const body={
      acno,
      pswd
    }
// server call to login an account and return response to login component
return this.http.post('http://localhost:3000/login',body)
}
// appendin token to the http header
appendToken(){
  // fetch token from local storage
 const token = localStorage.getItem("token")||''
//  create http header
var headers= new HttpHeaders()
if(token){
// append token inside http headers
headers=headers.append('access-token',token)
// overload
options.headers=headers
}
return options

}

// getBalance
getBalance(acno:any){
return this.http.get('http://localhost:3000/getbalance/'+acno,this.appendToken())
}

// deposit
deposit(acno:any,amount:any){
 const body= {
  acno,
  amount
 }
  return this.http.post('http://localhost:3000/deposit',body,this.appendToken())
}


// fundtransfer
fundTransfer(toAcno:any,pswd:any,amount:any){
const body={
  toAcno,
  pswd,amount
}
return this.http.post('http://localhost:3000/fundTransfer',body,this.appendToken())

}

// all-transactions api
getAllTransactions(){
  return this.http.get('http://localhost:3000/all-transactions',this.appendToken())
}

// deleteAccount api
deleteAccount(acno:number){
  return this.http.delete('http://localhost:3000/delete-account/'+acno,this.appendToken())

}

}
