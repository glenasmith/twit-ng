/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FriendComponent } from './friend.component';

describe('Component: Friend', () => {
  it('should create an instance', () => {
    let component = new FriendComponent(null);
    expect(component).toBeTruthy();
  });
});
