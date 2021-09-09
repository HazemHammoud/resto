import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {
  id: any;
  plat: any;
  platForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router,
    private platservice: PlatService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.plat = this.searchPlat();
    this.platservice.getPlatById(this.id).subscribe(
      (data) => { this.plat = data.plat; }
    )
  }
  searchPlat() {
    let plats = JSON.parse(localStorage.getItem('plats') || '[]');
    let searchedPlat = {};
    for (let i = 0; i < plats.length; i++) {
      if (plats[i].id == this.id) {
        searchedPlat = plats[i];
        break;
      }
    }
    return searchedPlat;
  }

  editPlat() {
    // let plats = JSON.parse(localStorage.getItem('plats') || '[]');
    // for (let i = 0; i < plats.length; i++) {
    //   if (plats[i].id == this.id) {
    //     plats[i].name = this.plat.name;
    //     plats[i].description = this.plat.description;
    //     plats[i].price= this.plat.price;
    //     break;
    //   }

    // }
    // localStorage.setItem("plats", JSON.stringify(plats));
    // this.router.navigate(['admin']);
    this.platservice.updatePlat(this.plat).subscribe(
      (data) => { console.log('this plat is edited',data); }
    )
    this.router.navigate(['admin']);
  }
}
