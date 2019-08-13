import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = '../assets/item.json';
  items: Item[];
  status: string;
  filteredData: Item[]; //for search operation
  constructor(private http: HttpClient) {
    this.getItems();
  }
  getData(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url).pipe(retry(2), catchError(this.handleError));
  }
  handleError(error) {
    console.log(error);
    return throwError(error);
  }

  getItems() {
    this.getData().subscribe((data: Item[]) => {
       this.items = data;
       console.log('Datas are ' + this.items);
    }, error => {alert('problem with service/url try again')});
  }
  getAllItems() {
    return this.items;
  }
  deleteItem(i: number): void {
    this.items.splice(i, 1); //(index, 1) means delete record ... (index, 0) means add record
  }
  addItem(item: Item) {
    this.items.push(item);
    return true;
  }
  setSearchedData(data) {
    this.filteredData = data;
   }
   getSearchedData() {
    return this.filteredData;
    }
}
