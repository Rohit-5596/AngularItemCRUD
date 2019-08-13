import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getAllItems();
  }
  delete(i: number) {
    if (confirm('Are you sure you want to delete ?')) {
      this.itemService.deleteItem(i);
    }
  }


  }
