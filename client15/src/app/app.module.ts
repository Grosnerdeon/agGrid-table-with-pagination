import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';
import { ActionsCellComponent } from './actions-cell/actions-cell.component';
import { AgGridTableWithPagesComponent } from './ag-grid-table-with-pages/ag-grid-table-with-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridTableComponent,
    ActionsCellComponent,
    AgGridTableWithPagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
