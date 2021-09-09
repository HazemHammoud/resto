import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  chefs:any=[];


  constructor() { }

  ngOnInit() {
    this.chefs =[
      {id:1, name:'Aymen Trabelsi', speciality:'cuisine tunisienne',image:'assets/img/team/chefs_1.png'},
      {id:2, name:'imed Hajji', speciality:'cuisine italienne',image:'assets/img/team/chefs_2.png'},
      {id:3, name:'Sirine Abdelli', speciality:'cuisine orientale',image:'assets/img/team/chefs_3.png'},
    ];


  }

}
