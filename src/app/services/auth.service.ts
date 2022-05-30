import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: any;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(): Observable<any> {
    return this.http.post('https://fakestoreapi.com/auth/login', {
      username: "mor_2314",
      password: "83r5^_"
    }, httpOptions);
  }

  isLoggedIn() {
    return this.cookieService.check('access_token');
  }

  productsList(limit: any, sort: any): Observable<any> {
    this.url = 'https://fakestoreapi.com/products?limit='+limit+'&sort='+sort;
    return this.http.get(this.url, { responseType: 'json' });
  }

  productsListByCategory(category: string, limit: any, sort: any): Observable<any> {
    this.url = 'https://fakestoreapi.com/products/category/'+category+'?limit='+limit+'&sort='+sort;
    return this.http.get(this.url, { responseType: 'json' });
  }

  DisplayCart(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/carts/user/2', { responseType: 'json' });
  }

  categoriesList(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/categories', { responseType: 'json' });
  }
  
}
