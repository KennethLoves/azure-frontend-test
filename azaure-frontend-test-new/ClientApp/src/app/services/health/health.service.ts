import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ServiceBase } from 'app/services/service-base.service';
import { HandledError } from 'app/errors/handled.error';

@Injectable({
  providedIn: 'root',
})
export class HealthService extends ServiceBase {
  readonly userPhoto404ErrorMessage: string = 'Health route returned 404.';

  constructor(private readonly _httpClient: HttpClient) {
    super();
  }

  getHealthStatus(): Observable<{}> {
    return this._httpClient.get('/api/Health', { responseType: 'text', observe: 'response' }).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 404) {
          // global error handler should catch this
          return throwError(new HandledError(this.userPhoto404ErrorMessage));
        } else {
          return throwError(error);
        }
      })
    );
  }
}
