import { TwitNgPage } from './app.po';

describe('twit-ng App', function() {
  let page: TwitNgPage;

  beforeEach(() => {
    page = new TwitNgPage();
  });

  it('should be able to post a tweet', () => {
    page.navigateTo();
    page.postNewTweet("winning new tweet");
    
    expect(page.getFeedCount()).toEqual(6);
    expect(page.getLatestTweet()).toEqual("winning new tweet");
  });


  it("Should increment retweet count", () => {
	    page.navigateTo();
	    page.retweetLatestTweet();
	    var rtCount = page.getLatestTweetRetweetCount();
	    expect(rtCount).toEqual("2 Retweets");
	  });

});
