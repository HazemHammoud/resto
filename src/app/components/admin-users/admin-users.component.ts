import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: any = [];

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    // this.users= [
    //   {id:1, firstName:"ahmed", lastName:"ayadi", email:"ahmed@gmail.com",telephone:22111111, adresse:"Tunis"},
    //   {id:2, firstName:"aymen", lastName:"trabelsi", email:"aymen@gmail.com",telephone:22222222, adresse:"BenArouss"},
    //   {id:3, firstName:"sirine", lastName:"abdallah", email:"sirine@gmail.com",telephone:22333333, adresse:"Manouba"},
    //   {id:4, firstName:"imen", lastName:"srayri", email:"imen@gmail.com",telephone:22444444, adresse:"Ariana"},
    //   {id:5, firstName:"samir", lastName:"mokni", email:"samir@gmail.com",telephone:22555555, adresse:"Bizerte"}
    // ];
    // this.users=JSON.parse(localStorage.getItem('users')||'[]');
    this.userService.getAllUsers().subscribe(
      (data) => { this.users = data.allUsers; }
    );
  }
  goToDisplay(id: number) {
    //alert('button clicked'+id);
    this.router.navigate([`displayUser/${id}`]);

  }
  deleteUser(id: number) {
    // this.users.splice(pos, 1);
    // localStorage.setItem("users", JSON.stringify(this.users));
    this.userService.deleteUserById(id).subscribe(
      (data) => {
        console.log('Result', data.message);
        this.userService.getAllUsers().subscribe(
          (data) => { this.users = data.allUsers; }
        );
      }
    );
  }

  goToEdit(id: number) {

    this.router.navigate([`editUser/${id}`]);
  }
}
