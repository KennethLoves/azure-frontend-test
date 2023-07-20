import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root',
})
export class NorthwindService {
  readonly baseUri = 'https://northwind.vercel.app/api/categories';

  constructor(private readonly _httpClient: HttpClient) {}

  /**
   * @returns Categories from the Northwind Service
   */
  getCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseUri}`);
  }
}
