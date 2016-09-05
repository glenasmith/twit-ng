import { Injectable } from '@angular/core';
import { Http, Response  }    from '@angular/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Tweet } from './tweet';

@Injectable()
export class FeedService {

  tweets = [

    new Tweet('Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', 'Glen', new Date(), ['Joe'], []),

    new Tweet('Measuring programming progress by lines of code is like measuring aircraft building progress by weight', 'Joe', new Date(), [], ['Mary']),

    new Tweet('Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 'Mary', new Date(), ['Glen'], ['Mary']),

    new Tweet('People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones', 'Glen', new Date(), ['Joe', 'Mary'], []),

    new Tweet('You can’t have great software without a great team, and most software teams behave like dysfunctional families.', 'Joe', new Date(), [], ['Mary', 'Glen']),


  ]

  constructor(private userService: UserService, private http : Http) { }

  getCurrentFeed(): Array<Tweet> {

    return this.tweets;


  }

  private isUserInCollection(collection: string[], userId: string): boolean {

    return collection.indexOf(userId) != -1;

  }

  postNewTweet(tweetText: string) {
    this.tweets.unshift(
      new Tweet(tweetText, this.userService.getCurrentUser(), new Date(), [], [])
    );
  }

  reTweet(tweet: Tweet) {

    if (!this.isUserInCollection(tweet.retweets, this.userService.getCurrentUser())) {
      tweet.retweets.push(this.userService.getCurrentUser());
    }

  }

  favoriteTweet(tweet: Tweet) {

    if (!this.isUserInCollection(tweet.favorites, this.userService.getCurrentUser())) {
      tweet.favorites.push(this.userService.getCurrentUser());
    }

  }

  getFriends() : Observable<string[]> {

    return this.http.get('/friends.json').map((resp: Response) => resp.json() as string[]);
	    //return [ 'Mary', 'Joe', 'Karen', 'Phil', 'Toni' ];

	}


}
