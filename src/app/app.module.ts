import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { SPOTIFY_PROVIDERS } from './spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SPOTIFY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
