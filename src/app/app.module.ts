import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed';
import { FriendsComponent } from './friends';
import { FriendComponent } from './friend';
import { MessagesComponent } from './messages';
import { MenuComponent } from './menu';
import { UserService } from './user.service';
import { FeedService } from './feed.service';
import { routing,
         appRoutingProviders } from './app.routing';

@NgModule({
	declarations: [ AppComponent, FeedComponent, MenuComponent, FriendsComponent, FriendComponent, MessagesComponent ],
	providers: [ UserService, FeedService, appRoutingProviders ],
	imports: [ BrowserModule, FormsModule, routing, HttpModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }