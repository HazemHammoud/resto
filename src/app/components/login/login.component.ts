import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  //Objet
  user: any = {};
  message: string;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']

    });
  }
  login() {
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log('data after login from BE', data.message);
        if (data.message !== '2') {
          this.message = 'please check your Email/Password';
        } else {
          localStorage.setItem('connectedUser', data.user.id);
          if (data.user.role == 'user') {
            this.router.navigate(['']);
          } else {
            this.router.navigate(['admin']);
          }
        }
      }
    );
  }


}
