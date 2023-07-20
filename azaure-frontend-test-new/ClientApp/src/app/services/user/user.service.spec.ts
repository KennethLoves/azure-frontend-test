import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

import { UserService } from 'app/services/user/user.service';
import { HandledError } from 'app/errors/handled.error';

const MOCKED_MSAL_SERVICE = {
  instance: jasmine.createSpyObj('instance', ['getActiveAccount']),
};

describe('UserService', () => {
  let service: UserService;
  let controller: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        UserService,
        {
          provide: MsalService,
          useValue: MOCKED_MSAL_SERVICE,
        },
      ],
    });

    injector = getTestBed();
    service = TestBed.inject(UserService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user information', () => {
    // arrange
    const actInfo: AccountInfo = {
      homeAccountId: '',
      localAccountId: '',
      environment: '',
      tenantId: '',
      username: '',
      idTokenClaims: {
        roles: ['Treasury'],
      },
      name: 'Tyler Stacy',
    };

    MOCKED_MSAL_SERVICE.instance.getActiveAccount.and.returnValue(actInfo);

    // act
    const result = service.getUserProfile();

    // assert
    expect(result.displayName).toBe('Tyler Stacy');
  });

  it('getUserPhoto 404 produces handled error', (done: DoneFn) => {
    // arrange
    const blob = new Blob([''], { type: 'data:image/jpeg' });

    // act
    service.getUserPhoto().subscribe({
      error: (err: Error) => {
        // assert
        expect(err).toEqual(new HandledError(service.userPhoto404ErrorMessage));
        done();
      },
    });
    const req = controller.expectOne('https://graph.microsoft.com/v1.0/me/photo/$value');

    // Respond with mock error
    req.flush(blob, { status: 404, statusText: 'Not Found' });
  });
});
