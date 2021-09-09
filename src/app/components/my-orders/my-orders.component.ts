import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: any = [];
  plats: any = [];
  idUser:any;
  constructor(private orderService: OrderService, private platService: PlatService) { }

  ngOnInit() {
    this.idUser=localStorage.getItem('connectedUser');
    this.orderService.getUserOrders(this.idUser).subscribe(
      (data) => { this.orders = data.myOrders;
        console.log(data.myOrders);
       }
      
    );
   
    
  }
}
