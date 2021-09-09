import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  // form Id: input group 
  chefForm: FormGroup;
  //Objet
  chef: any = {};
  // construction du forme (creation des inputs)
  constructor(private formBuilder: FormBuilder,
    private chefService:ChefService,
    private router:Router) { }

  ngOnInit() {
    this.chefForm = this.formBuilder.group({
      name: [''],
      speciality: [''],
      note: [''],
      level: ['']
    });
  }
  addChef() {
    // let idChef = JSON.parse(localStorage.getItem('idChef') || '1');
    // this.chef.id = idChef;
    // if (this.chef.note >= 0 && this.chef.note < 5) {
    //   this.chef.level = 'Beginner';
    // }
    // else if (this.chef.note >= 5 && this.chef.note < 8) {
    //   this.chef.level = 'Professional';
    // }
    // else { this.chef.level = 'Expert'; }

    // this.chef.entryDate = new Date();
    // let chefs = JSON.parse(localStorage.getItem('chefs') || '[]');
    // chefs.push(this.chef);
    // localStorage.setItem('chefs', JSON.stringify(chefs));
    // localStorage.setItem('idChef', idChef + 1);
    this.chefService.addChef(this.chef).subscribe(
      (data) => { console.log('chef added with success BE',data.message); }
    )
    this.router.navigate(['admin']);
    }

}
