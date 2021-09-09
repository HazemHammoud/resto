import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderURL:string='http://localhost:3000/orders';
  constructor(private http:HttpClient) { }

  getAllOrders(){
    return this.http.get<{allOrders:any}>(this.orderURL);
  }

  getUserOrders(id){
    return this.http.get<{myOrders:any}>(`${this.orderURL}/${id}`);
  }

  deleteOrder(id){
    return this.http.delete<{message:string}>(`${this.orderURL}/${id}`);
  }

  addOrder(order){
    return this.http.post<{message:string}>(this.orderURL, order);
  }

  updateOrder(order){
    return this.http.put(`${this.orderURL}/${order.id}`, order);
  }
}
