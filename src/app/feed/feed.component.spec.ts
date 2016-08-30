/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FeedComponent } from './feed.component';

describe('Component: Feed', () => {
  it('should create an instance', () => {
    let component = new FeedComponent(null, null);
    expect(component).toBeTruthy();
  });
});
