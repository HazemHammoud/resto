import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  id: any;
  user: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.user = this.searchUser();
    this.userService.getUserById(this.id).subscribe(
      (data) => { this.user = data.user; }
    )

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
  editUser() {
    this.userService.updateUser(this.user).subscribe(
      () => { console.log('this user is edited'); }
    )
    // let users = JSON.parse(localStorage.getItem('users') || '[]');
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].id == this.id) {
    //     users[i].firstName = this.user.firstName;
    //     users[i].lastName = this.user.lastName;
    //     users[i].tel = this.user.tel;
    //     break;
    //   }
     
    // }
    // localStorage.setItem("users", JSON.stringify(users));
    // this.router.navigate(['admin']);

  }
}
