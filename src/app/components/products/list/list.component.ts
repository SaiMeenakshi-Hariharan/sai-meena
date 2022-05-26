import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private authService: AuthService) { }
  data: { id: number, title: string, price: number, description: string, category: string, image: string, rating: Object }[] = [];

  ngOnInit(): void {
    this.authService.productsList().subscribe(
      res => {
        this.data = res;
      });
  }
  

}
