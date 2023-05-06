import { Injectable } from '@angular/core';
import { IUser } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  constructor() { }
  createDb() {
    const users: IUser[] = [];

    for (let i = 1; i < 1000; i++) {
      users.push({
        id: i,
        name: `Test User ${i}`,
        registrationTime: new Date().toDateString(),
        firstName: `First Name ${i}`,
        lastName: `Last Name ${i}`
      })
    }
    return {users};
  }

  genId(users: IUser[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
}
