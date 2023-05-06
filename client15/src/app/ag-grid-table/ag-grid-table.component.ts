import { Component, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces';
import { AgGridAngular } from 'ag-grid-angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.css']
})
export class AgGridTableComponent {
  public columnDefs: ColDef[] = [
    { field: 'name', flex: 1},
    { field: 'firstName', flex: 1},
    { field: 'lastName', flex: 1 },
    { field: 'registrationTime', flex: 1 }
  ];
  
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
  };

  public rowData$!: Observable<IUser[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private userService: UserService) {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.userService.getUsers();
  }
}
