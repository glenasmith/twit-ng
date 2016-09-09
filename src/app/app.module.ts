import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed';
import { FriendsComponent } from './friends';
import { FriendComponent } from './friend';
import { MessagesComponent } from './messages';
import { LoginComponent } from './login';
import { MenuComponent } from './menu';
import { UserService } from './user.service';
import { FeedService } from './feed.service';
import { routing,
         appRoutingProviders } from './app.routing';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { MockDatabaseService }  from './mock.database.service';


@NgModule({
	declarations: [ AppComponent, FeedComponent, MenuComponent, FriendsComponent, FriendComponent, MessagesComponent, LoginComponent ],
	providers: [ UserService, FeedService, appRoutingProviders ],
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule, routing, HttpModule,
		InMemoryWebApiModule.forRoot(MockDatabaseService, { 
            delay: 1000,  rootPath: 'api/'
        })
	 ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }