import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  title = environment.title;

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  logout() {
    this.cookieService.delete('access_token');
  }

}
