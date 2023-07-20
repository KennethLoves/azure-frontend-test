import { Filter } from 'app/models/filter.model';
import { OrderBy } from 'app/models/order-by.model';

/*
 * The search option class
 */
export class SearchOption {
  /*
   * Gets or sets the base query
   */
  baseQuery: string;

  /*
   * Gets or sets the top
   */
  top: number;

  /*
   * Gets or sets the skip
   */
  skip: number;

  /*
   * Gets or sets the order by
   */
  orderBy?: OrderBy;

  /*
   * Gets or sets the filters
   */
  filters: Array<Filter>;
}
