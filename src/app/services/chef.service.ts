import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  chefURL:string='http://localhost:3000/chefs';
  constructor(private http:HttpClient) {}
  getAllChefs(){
    return this.http.get<{allChefs:any}>(this.chefURL);
  }

  getChefById(id){
    return this.http.get<{chef:any}>(`${this.chefURL}/${id}`);
  }

  deleteChef(id){
    return this.http.delete<{message:string}>(`${this.chefURL}/${id}`);
  }

  addChef(chef){
    return this.http.post<{message:string}>(this.chefURL, chef);
  }

  updateChef(chef){
    return this.http.put(`${this.chefURL}/${chef.id}`, chef);
  }
  searchBySpeciality(speciality:any){
    return this.http.post<{findedChefs:any}>(`${this.chefURL}/search`,speciality);
  }

}
