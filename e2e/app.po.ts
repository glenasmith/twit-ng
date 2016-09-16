export class TwitNgPage {
  navigateTo() {
    return browser.get('/feed');
  }

  postNewTweet(newTweet) {
    element(by.name("body")).sendKeys(newTweet);
    element(by.css("button")).click();
  }

  getFeedCount() {
    return element.all(by.css(".comment")).count();
  }

  getLatestTweet() {
    return element.all(by.css(".comment .content .text")).get(0).getText();
  }


  retweetLatestTweet() {
    element.all(by.css(".comment .content .actions .retweet")).get(0).click();
  }

  getLatestTweetRetweetCount() {
    return element.all(by.css(".comment .content .actions .retweet")).get(0).getText();
  }

}
