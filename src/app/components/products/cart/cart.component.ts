import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private authService: AuthService) { }

  data: any = [];
  productData: any;

  ngOnInit(): void {

    this.authService.DisplayCart().subscribe(
      res => {
        this.data = res[0];
        console.log(this.data.products);
      });

      this.authService.productsList(undefined, undefined).subscribe(
        res => {
          this.productData = res;
        });

  }

}
