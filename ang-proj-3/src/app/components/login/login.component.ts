import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  unamePattern = "^[a-z0-9_-]{8,15}$";
  pwdPattern = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*#?&^])[A-Za-z0-9@$!%*#?&^]{8,}$";

  constructor(private formBuilder:FormBuilder, private authService: AuthService, private router: Router, private cookieService: CookieService) { 

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
      password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]]
    });

  }

  ngOnInit(): void {
  }

  formSubmit(){
    this.authService.login().subscribe(
      res => {
        this.cookieService.set( 'access_token', res.token );
        this.router.navigate(['layout1/dashboard']);
      });
  }

}
