import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTableWithPagesComponent } from './ag-grid-table-with-pages.component';

describe('AgGridTableWithPagesComponent', () => {
  let component: AgGridTableWithPagesComponent;
  let fixture: ComponentFixture<AgGridTableWithPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridTableWithPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridTableWithPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
