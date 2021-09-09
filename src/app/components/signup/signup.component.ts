import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  url: string;
  signupForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
    this.signupForm = this.formBuilder.group({
      // firstName 5 characters
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      cpwd: [''],
      tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    },
      {
        validator: MustMatch('pwd', 'cpwd')
      }
    )

  }
  signup() {
    if (this.url == '/signup') {
      this.signupForm.value.role = 'user';
    } else {
      this.signupForm.value.role = 'admin';
    }

    //  let idUser=JSON.parse(localStorage.getItem('idUser')||'1');
    // this.signupForm.value.id=idUser;
    // let users=JSON.parse(localStorage.getItem('users')||'[]');
    // users.push(this.signupForm.value);
    // localStorage.setItem('users', JSON.stringify(users));
    // localStorage.setItem('idUser',idUser+1);
    this.userService.signup(this.signupForm.value).subscribe(
      (data) => { console.log('user added with success', data.message); }
    )
    this.router.navigate(['']);
  }
}
