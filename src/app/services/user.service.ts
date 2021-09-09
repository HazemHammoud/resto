import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http.get<{allUsers:any}>(this.userURL);
  }

  getUserById(id) {
    return this.http.get<{user:any}>(`${this.userURL}/${id}`);
  }

  signup(user) {
    return this.http.post<{message}>(`${this.userURL}/signup`, user);
  }

  login(user) {
    return this.http.post<{message:string,user:any}>(`${this.userURL}/login`, user);
  }

  deleteUserById(id){
    return this.http.delete<{message:string}>(`${this.userURL}/${id}`);
  }

  updateUser(user){
    return this.http.put(`${this.userURL}/${user.id}`, user);
  }


}
