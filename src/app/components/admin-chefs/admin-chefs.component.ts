import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-admin-chefs',
  templateUrl: './admin-chefs.component.html',
  styleUrls: ['./admin-chefs.component.css']
})
export class AdminChefsComponent implements OnInit {
  chefs: any = [];
  constructor(private router: Router,
    private chefService: ChefService) { }

  ngOnInit() {
    // this.chefs= [
    //   {id:1, name:"ahmed mabrouk", speciality:"Cuisine tunisienne",image:"assets/img/team/chefs_1.png"},
    //   {id:2, name:"faysel rahmani", speciality:"Sandwitch",image:"assets/img/team/chefs_2.png"},
    //   {id:3, name:"mohamed rekik", speciality:"Pizza",image:"assets/img/team/chefs_3.png"},
    //   {id:4, name:"abdallah smida", speciality:"Salade",image:"assets/img/team/chefs_1.png"},
    //   {id:5, name:"mabrouk hafyane", speciality:"Grillade",image:"assets/img/team/chefs_2.png"},

    // ];
    // this.chefs = JSON.parse(localStorage.getItem('chefs') || '[]');
    this.chefService.getAllChefs().subscribe(
      (data) => { this.chefs = data.allChefs; }
    );
  }
  goToDisplay(id: number) {
    //alert('button clicked'+id);
    this.router.navigate([`displayChef/${id}`]);
  }
  deleteChef(id) {
    // this.chefs.splice(pos, 1);
    // localStorage.setItem("chefs", JSON.stringify(this.chefs));
    this.chefService.deleteChef(id).subscribe(
      (data) => {
        console.log('Result', data.message);
        this.chefService.getAllChefs().subscribe(
          (data) => { this.chefs = data.allChefs; }
        );
      }
    );
  }
  goToEdit(id: number) {
    this.router.navigate([`editChef/${id}`]);
  }

  displayColorLevel(level) {
    if (level == 'Beginner') {
      return ('red');
    }
    else if (level == 'Professional') {
      return ('orange');
    }
    else { return ('green'); }
  }
}
