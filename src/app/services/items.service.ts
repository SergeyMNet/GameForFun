import { Injectable } from '@angular/core';
import { ItemOnMap } from '../models/item-model';
import { Subject } from 'rxjs/Subject';
import * as _ from 'underscore';

@Injectable()
export class ItemsService {

  private all_items: Array<ItemOnMap> = [];
  public clear_item$: Subject<boolean> = new Subject();
  public sel_item$: Subject<ItemOnMap> = new Subject();

  constructor() { }

  addItem(item: ItemOnMap) {
    this.all_items.push(item);
    this.sel_item$.next(item);
    this.checkWin();
  }

  private checkWin() {

    this.checkX();
    this.checkY();
  }

  private checkX() {
    let sortX = [];
    let unicX = [];
    sortX = _.map(this.all_items, function(item){ return item.x; }).sort();
    unicX = _.uniq(sortX);
console.log(unicX);
    let first = 0;
    let line = 0;
    unicX.forEach(el => {
      if (el === first + 1) {
        first++;
        line++;
        if (line === 5) {
          this.finish();
          return ;
        }
      } else {
        line = 1;
        first = el;
      }
    });
  }

  private checkY() {
    let first = 0;
    let line = 0;
    let sortY = [];
    let unicY = [];
    sortY = _.map(this.all_items, function(item){ return item.y; }).sort();
    unicY = _.uniq(sortY);

    unicY.forEach(el => {
      if (el === first + 1) {
        first++;
        line++;
        if (line === 5) {
          this.finish();
          return ;
        }
      } else {
        line = 1;
        first = el;
      }
    });
  }

  finish() {
    alert('YOU ARE WIN!!!');
    this.clear_item$.next(true);
    this.all_items = [];
  }


  moveUp() {
    this.clear_item$.next(true);
    this.all_items.forEach(i => {
      i.y++;
      this.sel_item$.next(i);
    });
  }
  moveDown() {
    this.clear_item$.next(true);
    this.all_items.forEach(i => {
      i.y--;
      this.sel_item$.next(i);
    });
  }
  moveLeft() {
    this.clear_item$.next(true);
    this.all_items.forEach(i => {
      i.x++;
      this.sel_item$.next(i);
    });
  }
  moveRight() {
    this.clear_item$.next(true);
    this.all_items.forEach(i => {
      i.x--;
      this.sel_item$.next(i);
    });
  }
}
