import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
//source: https://stackblitz.com/edit/angular-api-error-handling?file=src/app/page.component.html

@Injectable()
export class ApiErrorsInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          console.log('status = ', evt.status);
        }
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          console.error('error status = ', error.status);
          // console.log('---> filter:', req.params.get('filter'));

          //if (error.status >= 300 && error.status !== 404) {

          if (error.status == 501) {
            // redirect to error page
            // OR you can use a toast
            alert('Duplicate code entered - codes refresh every 24 hours');
          }
        }
        return throwError(error);
      })
    );
  }
}
