import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NorthwindService } from 'app/services/northwind/northwind.service';

describe('NorthwindService', () => {
  let service: NorthwindService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(NorthwindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
