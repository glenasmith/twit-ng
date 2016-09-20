
import { Observable } from 'rxjs/Rx';
import { Tweet } from './tweet';

export class MockFeedService {

    getCurrentFeed(): Observable<Tweet[]> {
        return Observable.of([
            new Tweet(123, 'First Mock Tweet', 'Glen', new Date(), [], []),
            new Tweet(124, 'Second Mock Tweet', 'Jim', new Date(), [], [])
        ]);
    }


    postNewTweet(tweetText: string) {


    }

    reTweet(tweet: Tweet) {
        tweet.retweets.push('Mock User');

    }

    favoriteTweet(tweet: Tweet) {

        tweet.favorites.push('Mock User');

    }

    getFriends(): Observable<string[]> {

        return Observable.of([
            'First', 'Second', 'Third'
        ]);

    }

}