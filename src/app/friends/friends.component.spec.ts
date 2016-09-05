/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FriendsComponent } from './friends.component';

describe('Component: Friends', () => {
  it('should create an instance', () => {
    let component = new FriendsComponent(null);
    expect(component).toBeTruthy();
  });
});
