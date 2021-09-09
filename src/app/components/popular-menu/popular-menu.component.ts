import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-menu',
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.css']
})
export class PopularMenuComponent implements OnInit {
// variable globale

  menus:any=[];

  // methode prédefini 
  //la creation des instances (des objets)

  constructor() { }

  ngOnInit() {
          // dans le futur, ces objets vont etre recupéré de la base de données
    this.menus =[
      {id:1, name:'couscous', price: 35, description:'plat tunisien'},
      {id:2, name:'ojja', price: 16, description:'plat tunisien'},
      {id:3, name:'salade tunisienne', price: 6, description:'salade'},
      {id:4, name:'salade mechwia', price: 6, description:'salade'}
    ];

    
  }

}
