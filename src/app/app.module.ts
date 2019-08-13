import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { AdditemComponent } from './additem/additem.component';
import { SearchitemComponent } from './searchitem/searchitem.component';
import { ShowsearcheddataComponent } from './showsearcheddata/showsearcheddata.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent,
    AdditemComponent,
    SearchitemComponent,
    ShowsearcheddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
