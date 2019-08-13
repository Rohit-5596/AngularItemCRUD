import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  items: Item = {id: 0, name: '', price: 0, brand: ''};
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
  }
  add() {
    this.itemService.addItem(this.items);
    alert('item added successfully');
    this.router.navigate(['show']);
    }

}
