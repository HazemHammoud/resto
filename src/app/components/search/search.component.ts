import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  chef: any = {};
  searchForm: FormGroup;
  findedChefs:any;
  constructor(private formBuilder: FormBuilder, private chefService: ChefService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      speciality: ['']
    })
  }
  search() {
    console.log('speciality', this.chef);
    this.chefService.searchBySpeciality(this.chef).subscribe(
      (data) => {
        console.log('here finded chefs', data.findedChefs);
        this.findedChefs=data.findedChefs;
      }
    )
  }
}
