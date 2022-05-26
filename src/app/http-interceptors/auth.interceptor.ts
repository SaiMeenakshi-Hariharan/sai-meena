import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Get the auth token from the cookie
    const authToken = this.cookieService.get('access_token');
    // Clone the request and set the new header in one step
    const authReq = request.clone({ setHeaders: { Authorization: `${authToken}` } });
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
