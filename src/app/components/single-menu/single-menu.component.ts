import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connected } from 'process';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.css']
})
export class SingleMenuComponent implements OnInit {

  @Input() menuInput: any;
  order: any={};

  constructor(private router: Router, private orderService:OrderService) { }

  ngOnInit() {
    this.order.idUser = localStorage.getItem('connectedUser');

  }
  priceColor(price) {
    if (price > 25) {
      return ('red');
    }
    else if (price <= 25 && price >= 15) {
      return ('orange');
    }
    else {
      return ('green');
    }
  }
  goToOrders(id) {
    this.order.idPlat = id;
    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe(
      (data)=>{console.log(data.message);}
    );
    this.router.navigate(['orders']);
    

  }
}
