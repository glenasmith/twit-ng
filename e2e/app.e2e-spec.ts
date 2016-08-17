import { TwitNgPage } from './app.po';

describe('twit-ng App', function() {
  let page: TwitNgPage;

  beforeEach(() => {
    page = new TwitNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
