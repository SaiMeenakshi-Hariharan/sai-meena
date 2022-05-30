import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  category: any;
  limit: any;
  sort: any;


  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }
  data: { id: number, title: string, price: number, description: string, category: string, image: string, rating: Object }[] = [];

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.limit = params.get('limit');
      this.sort = params.get('sort');
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      if(this.category != undefined){
        this.authService.productsListByCategory(this.category,this.limit,this.sort).subscribe(
          res => {
            this.data = res;
          });
      }
      else { 
        this.authService.productsList(this.limit, this.sort).subscribe(
          res => {
            this.data = res;
          });
      }
    });

    
  }

  onLimit(event: any){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      if(this.category != undefined){
        this.router.navigate(
          ['/layout1/products/categories/category', this.category],
          {
            queryParams: { limit: event.target.value },
            queryParamsHandling: 'merge'
          }).then(() => {
            window.location.reload();
          });
      }
      else { 
        this.router.navigate(
          ['/layout1/products'],
          {
            queryParams: { limit: event.target.value },
            queryParamsHandling: 'merge'
          }).then(() => {
            window.location.reload();
          });
      }
    });
  }

  onSort(event: any){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      if(this.category != undefined){
        this.router.navigate(
          ['/layout1/products/categories/category', this.category],
          {
            queryParams: { sort: event.target.value },
            queryParamsHandling: 'merge'
          }).then(() => {
            window.location.reload();
          });
      }
      else { 
        this.router.navigate(
          ['/layout1/products'],
          {
            queryParams: { sort: event.target.value },
            queryParamsHandling: 'merge'
          }).then(() => {
            window.location.reload();
          });
      }
    });
  }
  

}
