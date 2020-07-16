import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { TransactionService } from './services/transaction.service';

import { AppComponent } from './app.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransactionTableComponent } from './components/transaction/transaction-list.component';
import { SortableBnts } from './components/transaction/sortable.directive'
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { NumberOnlyDirective } from './directives/number-only.directive';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    TransferFormComponent,
    TransactionTableComponent,
    SortableBnts,
    CardComponent,
    ModalComponent,
    NumberOnlyDirective
  ],
  providers: [
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
