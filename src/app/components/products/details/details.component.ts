import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  id: any;
  product: any;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }
  
  productData: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log(this.id);
      this.authService.productsList(undefined, undefined).subscribe(
        res => {
          this.productData = res;
          this.product = this.productData.find((p: any) => p.id==this.id);
        }); 
    });
  }
  

}
