import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VegComponent } from './veg/veg.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';

@NgModule({
  declarations: [
    AppComponent,
    VegComponent,
    ChocolatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
