/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';

describe('Component: Messages', () => {
  it('should create an instance', () => {
    let component = new MessagesComponent();
    expect(component).toBeTruthy();
  });
});
