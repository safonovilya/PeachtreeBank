import {Transaction} from "./transaction";
import {SortColumn} from "./sortable.directive";
import {PipeTransform} from "@angular/core";

export const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export function sort(transactions: Transaction[], column: SortColumn, direction: string): Transaction[] {
  if (direction === '' || column === '') {
    return transactions;
  } else {
    return [...transactions].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

export function matches(transaction: Transaction, term: string, pipe: PipeTransform) {
  return transaction.merchant.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(transaction.amount).includes(term);
}
