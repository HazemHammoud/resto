import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-chef',
  templateUrl: './single-chef.component.html',
  styleUrls: ['./single-chef.component.css']
})
export class SingleChefComponent implements OnInit {

  @Input() chefInput:any;

  constructor() { }

  ngOnInit() {
  }

}
