import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-edit-chef',
  templateUrl: './edit-chef.component.html',
  styleUrls: ['./edit-chef.component.css']
})
export class EditChefComponent implements OnInit {
  id: any;
  chef: any;
  chefForm:FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private fb:FormBuilder, private router:Router, 
    private chefService:ChefService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.chef = this.searchChef();
    this.chefService.getChefById(this.id).subscribe(
      (data) => { this.chef = data.chef; }
    )
  }
  searchChef() {
    let chefs = JSON.parse(localStorage.getItem('chefs') || '[]');
    let searchedChef = {};
    for (let i = 0; i < chefs.length; i++) {
      if (chefs[i].id == this.id) {
        searchedChef = chefs[i];
        break;
      }
    }
    return searchedChef;
  }
  editChef() {
    this.chefService.updateChef(this.chef).subscribe(
      () => { console.log('this chef is edited'); }
    )
    // let chefs = JSON.parse(localStorage.getItem('chefs') || '[]');
    // for (let i = 0; i < chefs.length; i++) {
    //   if (chefs[i].id == this.id) {
    //     chefs[i].name = this.chef.name;
    //     chefs[i].speciality = this.chef.speciality;
    //     break;
    //   }
     
    // }
    // localStorage.setItem("chefs", JSON.stringify(chefs));
    // this.router.navigate(['admin']);

  }
}
