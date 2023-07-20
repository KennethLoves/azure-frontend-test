import { HttpHeaders } from '@angular/common/http';

import { SearchOption } from 'app/models/search-option.model';

export const CONTENT_TYPE_JSON_HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

export class ServiceBase {
  createQueryString(options: Partial<SearchOption>) {
    const query: Array<string> = [];
    let queryString = '';

    if (options.baseQuery && options.baseQuery.length) {
      query.push(options.baseQuery);
    }

    if (options.top > 0) {
      query.push('searchoption.top=' + options.top);
    }

    if (options.skip > 0) {
      query.push('searchoption.skip=' + options.skip);
    }

    if (options.orderBy) {
      const filter = `searchoption.orderby`;
      query.push(`${filter}.field=${options.orderBy.field}`);
      query.push(`${filter}.sorttype=${options.orderBy.sortType}`);
    }

    if (options.filters && options.filters.length) {
      for (let i = 0; i < options.filters.length; i++) {
        const filter = `searchoption.filters[${i}]`;
        query.push(`${filter}.field=${options.filters[i].field}`);
        query.push(`${filter}.value=${options.filters[i].value}`);
      }
    }

    if (query.length) {
      queryString = '?' + query.join('&');
    }

    return queryString;
  }
}
