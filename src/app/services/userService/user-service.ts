import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_api_url = 'http://localhost:3000/users';
  
  
  constructor(private httpClient:HttpClient){ 
}


  getUsers() {
    return this.httpClient.get(this.user_api_url);
  }

  addUser(user: any) {
    return this.httpClient.post(this.user_api_url, user);
  }


  deleteUser(id: number){
    return this.httpClient.delete(`${this.user_api_url}/${id}`);
  }


  updateUser(id: any, user: any){
    return this.httpClient.patch(`${this.user_api_url}/${id}`, user);
  }



}
