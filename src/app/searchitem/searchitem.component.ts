import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.css']
})
export class SearchitemComponent implements OnInit {
  items: Item[];
  searchedItems: Item[];
  constructor(private service: ItemService) { }

  ngOnInit() {
    this.items = this.service.getAllItems();
  }
  filterData(value: string) {
    this.searchedItems = this.items.filter( item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    this.service.setSearchedData(this.searchedItems); //for showing data in another page after search
    if (this.searchedItems.length > 0) {
      alert('data found, to view use showsearched menu');
    } else {
      alert('Not found please try with registered name');
    }
    }

}
