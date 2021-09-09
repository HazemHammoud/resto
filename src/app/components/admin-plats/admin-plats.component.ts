import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-admin-plats',
  templateUrl: './admin-plats.component.html',
  styleUrls: ['./admin-plats.component.css']
})
export class AdminPlatsComponent implements OnInit {

  plats: any = [];

  constructor(private router: Router,
    private platService: PlatService) { }

  ngOnInit() {

    // this.plats= [
    //   {id:1, name:"couscous", price:12, description:"plat tunisien", image:"assets/img/food_menu/single_food_1.png"},
    //   {id:2, name:"salade tunisienne", price:4, description:"salade", image:"assets/img/food_menu/single_food_6.png"},
    //   {id:3, name:"Steak viande", price:16, description:"Grillade", image:"assets/img/food_menu/single_food_3.png"},
    //   {id:4, name:"ma9loub", price:6, description:"Sandwitch", image:"assets/img/food_menu/single_food_4.png"},
    //   {id:5, name:"escalope grillé", price:12, description:"Grillade", image:"assets/img/food_menu/single_food_5.png"}
    // ];
    // this.plats=JSON.parse(localStorage.getItem('plats')||'[]');
    this.platService.getAllPlats().subscribe(
      (data) => { this.plats = data.allPlats; }
    );
  }
  goToDisplay(id: number) {
    //alert('button clicked'+id);
    this.router.navigate([`displayPlat/${id}`]);
  }
  deletePlat(id) {
    // this.plats.splice(pos, 1);
    // localStorage.setItem("plats", JSON.stringify(this.plats));
    this.platService.deletePlat(id).subscribe(
      (data) => {
        console.log('Result', data.message);
        this.platService.getAllPlats().subscribe(
          (data) => { this.plats = data.allPlats; }
        );
      }
    );
  }
  goToEdit(id: number) {
    this.router.navigate([`editPlat/${id}`]);
  }
}
