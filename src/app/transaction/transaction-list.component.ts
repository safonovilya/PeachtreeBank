import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';

import { SortableBnts, SortEvent } from './sortable.directive';
import { TransactionService } from './transaction.service'
import { Transaction } from "./transaction";
import {Observable} from "rxjs";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  providers: [TransactionService, DecimalPipe]
})
export class TransactionTableComponent {
  transactions$: Observable<Transaction[]>;

  @ViewChildren(SortableBnts) sortableBnts: QueryList<SortableBnts>;

  constructor(public transactionService: TransactionService) {
    this.transactions$ = this.transactionService.transactions$;
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
