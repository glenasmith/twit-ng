import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed';
import { FriendsComponent } from './friends';
import { MessagesComponent } from './messages';

const appRoutes: Routes = [
    { path: '',  redirectTo: '/feed',  pathMatch: 'full'},
    { path: 'feed', component: FeedComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'messages', component: MessagesComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes); 