import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  moduleId: module.id,
  selector: 'app-friends',
  templateUrl: 'friends.component.html',
  styleUrls: ['friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends = [ ];
	
	  constructor(private feedService : FeedService) { 
	
	  }
	
	  ngOnInit() {
	    this.friends = this.feedService.getFriends();
	    console.log(this.friends);
	  }

}
