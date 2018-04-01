import { Component, OnInit } from '@angular/core';
import { ItemOnMap } from '../models/item-model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  public rows = [];
  public cols = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    for (let i = 0; i < 10; i++) {
      this.rows.push(i);
      this.cols.push(i);
    }
  }

  public selectItem(x: number, y: number) {
    console.log(x, y);
    this.itemsService.addItem(new ItemOnMap(x, y));
  }
}
