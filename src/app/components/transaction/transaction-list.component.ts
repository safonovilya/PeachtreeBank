import {Component, QueryList, ViewChildren} from '@angular/core';

import {SortableBnts, SortEvent} from '../../directives/sortable.directive';
import {TransactionService} from '../../services/transaction.service'
import { Observable} from "rxjs";
import {Transaction} from "../../models/transaction";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionTableComponent {
  transactions$: Observable<Transaction[]>;

  @ViewChildren(SortableBnts) sortableBnts: QueryList<SortableBnts>;

  constructor(public transactionService: TransactionService) {
    this.transactions$ = this.transactionService.transactions$
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.sortableBnts.forEach(btn => {
      if (btn.sortable !== column) {
        btn.direction = '';
      }
    });

    this.transactionService.sortColumn = column;
    this.transactionService.sortDirection = direction;
  }

}
