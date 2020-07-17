import {Injectable, OnDestroy} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject, Subscription} from 'rxjs';
import {delay, switchMap, tap} from 'rxjs/operators';

import {Transaction} from '../models/transaction';
import {TransactionsMockData} from '../components/transaction/transactions-mock-data';
import {DecimalPipe} from '@angular/common';
import {SortColumn, SortDirection} from '../directives/sortable.directive';
import {sort, matches} from '../components/transaction/sort.utilities';

interface SearchResult {
  transactions: Transaction[];

}

interface State {
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  lastUpdate: Date;
}

@Injectable({providedIn: 'root'})
export class TransactionService implements OnDestroy{
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _transactions$ = new BehaviorSubject<Transaction[]>([]);
  private readonly transactions = [];
  private _searchSubscription: Subscription;

  private _state: State = {
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    lastUpdate: new Date()
  };

  constructor(private pipe: DecimalPipe) {

    this.transactions = TransactionsMockData; // mock

    this._searchSubscription = this._search$.pipe(
      tap(() => this._loading$.next(true)),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._transactions$.next(result.transactions);
    });

    this._search$.next();
  }

  get transactions$() {
    return this._transactions$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  get lastUpdate() {
    return this._state.lastUpdate;
  }
  set searchTerm(searchTerm: string) {
    this._set({searchTerm});
  }

  set sortColumn(sortColumn: SortColumn) {
    this._set({sortColumn});
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({sortDirection});
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, searchTerm} = this._state;

    // 1. sort
    let transactions = sort(this.transactions, sortColumn, sortDirection);

    // 2. filter
    transactions = transactions.filter(transaction => matches(transaction, searchTerm, this.pipe));

    return of({transactions});
  }

  public add(transaction) {
    this.transactions.push(transaction);
    this._transactions$.next(this.transactions);
    this._search$.next();
  }

  ngOnDestroy() {
    this._searchSubscription.unsubscribe();
  }
}
