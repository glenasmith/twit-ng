import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getCurrentUser() : string {
    return 'Glen';
  }

}
