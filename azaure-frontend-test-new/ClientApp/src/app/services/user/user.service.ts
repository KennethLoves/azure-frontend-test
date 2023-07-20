import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MsalService } from '@azure/msal-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from 'app/models/user.model';
import { ServiceBase } from 'app/services/service-base.service';
import { HandledError } from 'app/errors/handled.error';
import { ProfileInformation } from 'app/interfaces/profile-information';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ServiceBase {
  readonly userPhoto404ErrorMessage: string = 'User photo request returned 404.';

  constructor(private readonly _msalService: MsalService, private readonly _httpClient: HttpClient) {
    super();
  }

  getUserProfile(): User {
    const user = new User();
    const account = this._msalService.instance.getActiveAccount();

    user.displayName = account.name;
    return user;
  }

  getUserPhoto(): Observable<Blob> {
    return this._httpClient.get('https://graph.microsoft.com/v1.0/me/photo/$value', { responseType: 'blob' }).pipe(
      map(data => {
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

  getUserInformation(): Observable<ProfileInformation> {
    return this._httpClient.get<ProfileInformation>('https://graph.microsoft.com/v1.0/me');
  }
}
