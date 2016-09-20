/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeedService } from './feed.service';
import { UserService } from './user.service';
import { HttpModule }    from '@angular/http';

describe('Service: Feed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedService, UserService],
      imports: [HttpModule]
    });
  });

  it('should ...',
    inject([FeedService],
      (service: FeedService) => {
        expect(service).toBeTruthy();
      }));
});
