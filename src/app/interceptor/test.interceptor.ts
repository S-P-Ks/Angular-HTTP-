import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const APT_TOKEN = '1falkfjal;qtio1222';
    const requestCopy: any = request.clone({
      setHeaders: { API_KEY: APT_TOKEN },
    });

    return next.handle(requestCopy);
  }
}
