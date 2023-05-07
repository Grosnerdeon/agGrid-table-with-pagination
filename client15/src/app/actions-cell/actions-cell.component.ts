import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actions-cell',
  templateUrl: './actions-cell.component.html',
  styleUrls: ['./actions-cell.component.css']
})
export class ActionsCellComponent implements ICellRendererAngularComp {
  public name: string = '';

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.name = params.data.name;
  }

  refresh(params: ICellRendererParams) {
    return false;
  }

  edit() {
    alert(`Edit user ${this.name}`);
  }

  delete () {
    alert(`Delete user ${this.name}`);
  }
}
