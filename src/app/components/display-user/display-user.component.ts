import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  id: any;
  user: any;
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.user = this.searchUser();
    this.userService.getUserById(this.id).subscribe(
      (data) => { this.user = data.user }
    );
  }
  searchUser() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let searchedUser = {};
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == this.id) {
        searchedUser = users[i];
        break;
      }
    }
    return searchedUser;
  }
}
