import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-showsearcheddata',
  templateUrl: './showsearcheddata.component.html',
  styleUrls: ['./showsearcheddata.component.css']
})
export class ShowsearcheddataComponent implements OnInit {
  searchedData: Item[];
  constructor(private service: ItemService) { }

  ngOnInit() {
    this.searchedData = this.service.getSearchedData();
  }

}
