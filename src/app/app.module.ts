import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransactionTableComponent } from './components/transaction/transaction-list.component';
import { SortableBnts } from './components/transaction/sortable.directive'
import { TransactionService } from './services/transaction.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    TransactionTableComponent,
    SortableBnts,
    CardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
  ],
  providers: [
    TransactionService
  ],
  exports:[TransactionTableComponent],
  bootstrap: [AppComponent, TransactionTableComponent]
})
export class AppModule { }
