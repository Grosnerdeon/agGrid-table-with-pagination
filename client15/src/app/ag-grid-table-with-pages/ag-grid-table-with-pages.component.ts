import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, RowModelType } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-table-with-pages',
  templateUrl: './ag-grid-table-with-pages.component.html',
  styleUrls: ['./ag-grid-table-with-pages.component.css']
})
export class AgGridTableWithPagesComponent {
  public columnDefs: ColDef[] = [
    { field: 'id', maxWidth: 75 },
    { field: 'athlete', minWidth: 190 },
    { field: 'age' },
    { field: 'year' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 90,
    resizable: true,
  };
  public rowModelType: RowModelType = 'serverSide';
  public paginationPageSize = 10;
  public cacheBlockSize = 10;
  public rowData!: any[];

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor() {}

  onGridReady(gridReadyEvent: GridReadyEvent<any>) {
    console.log('grid')
    const datasource = {
      getRows(params: any) {
          console.log(JSON.stringify(params.request, null, 1));
  
          fetch('/', {
              method: 'post',
              body: JSON.stringify(params.request),
              headers: { 'Content-Type': 'application/json; charset=utf-8' }
          })
          .then(httpResponse => httpResponse.json())
          .then(response => {
              params.successCallback(response.rows, response.lastRow);
          })
          .catch(error => {
              console.error(error);
              params.failCallback();
          })
      }
  };

  this.agGrid.api.setServerSideDatasource(datasource);
  }
}
