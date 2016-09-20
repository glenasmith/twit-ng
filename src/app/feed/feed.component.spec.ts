/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { FeedComponent } from './feed.component';
import { FeedService } from '../feed.service';
import { UserService } from '../user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockFeedService } from '../mock.feed.service';
import { Tweet } from '../tweet';

describe('Component: Feed', () => {

beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedComponent,
      ],
      providers: [
        { provide: FeedService, useClass:  MockFeedService },
        UserService,
      ],
      imports: [
        FormsModule
      ]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(FeedComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should retrieve things on init..', () => {
	    let fixture = TestBed.createComponent(FeedComponent);
	    let app = fixture.debugElement.componentInstance as FeedComponent;
	    expect(app.loaded).toBeFalsy();
	    expect(app.tweets.length).toEqual(0);
	
	    app.ngOnInit();
	    expect(app.tweets.length).toEqual(2);
	    expect(app.loaded).toBeTruthy();
	  });

    it('should favorite and retweet appropriately..', () => {
	
	    let fixture = TestBed.createComponent(FeedComponent);
	    let app = fixture.debugElement.componentInstance as FeedComponent;
	
	    let tweet = new Tweet(125, 'Another Mock Tweet', 'Glen', new Date(), [], []);
	
	    expect(tweet.favorites.length).toEqual(0);
	    app.OnFavorite(tweet);
	    expect(tweet.favorites.length).toEqual(1);
	
	    expect(tweet.retweets.length).toEqual(0);
	    app.OnRetweet(tweet);
	    expect(tweet.retweets.length).toEqual(1);
	
	  });
  
});
