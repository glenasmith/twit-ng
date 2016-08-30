/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FeedService } from './feed.service';
import { UserService } from './user.service';

describe('Service: Feed', () => {
  beforeEach(() => {
    addProviders([FeedService, UserService]);
  });

  it('should ...',
    inject([FeedService],
      (service: FeedService) => {
        expect(service).toBeTruthy();
      }));
});
