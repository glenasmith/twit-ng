/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Tweet} from './tweet';

describe('Tweet', () => {
  it('should create an instance', () => {
    expect(new Tweet(123, 'body', 'author', new Date(), [], [])).toBeTruthy();
  });
});
