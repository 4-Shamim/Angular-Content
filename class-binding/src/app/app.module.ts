import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleBidingComponent } from './style-biding/style-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleBidingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
