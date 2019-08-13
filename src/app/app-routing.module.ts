import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { AdditemComponent } from './additem/additem.component';
import { SearchitemComponent } from './searchitem/searchitem.component';
import { ShowsearcheddataComponent } from './showsearcheddata/showsearcheddata.component';


const routes: Routes = [
  {path: 'show' , component: ItemlistComponent},
  {path: 'add' , component: AdditemComponent},
  {path: 'search' , component: SearchitemComponent},
  {path: 'showsearcheddata' , component: ShowsearcheddataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
