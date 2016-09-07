
import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Tweet } from './tweet';
	
export class MockDatabaseService implements InMemoryDbService {
	  createDb() {

        let friends = [
	       "Mary", "Joe", "Karen", "Phil", "Toni" 
	    ];
	
	    let tweets = [
	
	      new Tweet(1, 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', 'Glen', new Date(), ['Joe'], []),
	
	      new Tweet(2, 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight', 'Joe', new Date(), [], ['Mary']),
	
	      new Tweet(3, 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 'Mary', new Date(), ['Glen'], ['Mary']),
	
	      new Tweet(4, 'People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones', 'Glen', new Date(), ['Joe', 'Mary'], []),
	
	      new Tweet(5, 'You can’t have great software without a great team, and most software teams behave like dysfunctional families.', 'Joe', new Date(), [], ['Mary', 'Glen']),
	
	    ];

        return { 'tweets' : tweets, 'friends' : friends };
      }
}