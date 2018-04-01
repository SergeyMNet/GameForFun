import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-ctrl-grid-menu',
  templateUrl: './ctrl-grid-menu.component.html',
  styleUrls: ['./ctrl-grid-menu.component.css']
})
export class CtrlGridMenuComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

  moveUp() {
    this.itemsService.moveUp();
  }
  moveDown() {
    this.itemsService.moveDown();
  }
  moveLeft() {
    this.itemsService.moveLeft();
  }
  moveRight() {
    this.itemsService.moveRight();
  }
}
