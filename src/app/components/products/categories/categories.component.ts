import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  data: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.categoriesList().subscribe(
      res => {
        this.data = res;
      });
  }

}
