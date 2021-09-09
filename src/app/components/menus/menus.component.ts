import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor(private platService: PlatService) { }
  menus = [];
  ngOnInit() {
    this.platService.getAllPlats().subscribe(
      (data) => { this.menus = data.allPlats; }
    )
  }

}
