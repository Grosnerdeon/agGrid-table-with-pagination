import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces';
import { UserService } from './user.service';
import { ModuleRegistry } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agGrid-example';

  users: IUser[] = [];

  constructor (
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
  }

}
