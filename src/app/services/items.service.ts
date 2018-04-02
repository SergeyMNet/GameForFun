import { Injectable } from '@angular/core';
import { ItemOnMap } from '../models/item-model';
import { Subject } from 'rxjs/Subject';
import * as _ from 'underscore';

@Injectable()
export class ItemsService {

  public player = true;
  private all_items: Array<Array<ItemOnMap>> = [[], []];

  public clear_item$: Subject<boolean> = new Subject();
  public sel_item$: Subject<ItemOnMap> = new Subject();

  constructor() { }

  addItem(item: ItemOnMap) {
    this.player = !this.player
    this.all_items[+this.player].push(item);
    this.sel_item$.next(item);
    this.checkWin(item, +this.player);
  }

  private checkWin(item: ItemOnMap, player: number) {

    const filterListY = this.all_items[player].filter(i => i.y === item.y);
    const resX = _.groupBy(filterListY, function(i){ return i.y; });

    // tslint:disable-next-line:forin
    for (const arr in resX) {
      this.checkX(resX[arr]);
    };

    const filterListX = this.all_items[player].filter(i => i.x === item.x);
    const resY = _.groupBy(filterListX, function(i){ return i.x; });
    // tslint:disable-next-line:forin
    for (const arr in resY) {
      this.checkY(resY[arr]);
    };
  }

  private checkX(all_items: Array<ItemOnMap>) {
    console.log(all_items);

    let sortX = [];
    let unicX = [];
    sortX = _.map(all_items, function(item){ return item.x; })
      .sort(function sortNumber(a, b) { return a - b; });
    unicX = _.uniq(sortX);

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

  private checkY(all_items: Array<ItemOnMap>) {
    let first = 0;
    let line = 0;
    let sortY = [];
    let unicY = [];
    sortY = _.map(all_items, function(item){ return item.y; })
      .sort(function sortNumber(a, b) { return a - b; });
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

  private finish() {
    alert('Player ' + (+this.player + 1) + ' : WIN!!!');
    this.clear_item$.next(true);
    this.all_items = [[], []];
  }

  public newGame() {
    alert('Start New Game!');
    this.clear_item$.next(true);
    this.all_items = [[], []];
  }


  moveUp() {
    this.clear_item$.next(true);
    this.all_items.forEach(items =>
    items.forEach(i => {
      i.y++;
      this.sel_item$.next(i);
    })
    );
  }
  moveDown() {
    this.clear_item$.next(true);
    this.all_items.forEach(items =>
    items.forEach(i => {
      i.y--;
      this.sel_item$.next(i);
    }));
  }
  moveLeft() {
    this.clear_item$.next(true);
    this.all_items.forEach(items =>
    items.forEach(i => {
      i.x++;
      this.sel_item$.next(i);
    }));
  }
  moveRight() {
    this.clear_item$.next(true);
    this.all_items.forEach(items =>
    items.forEach(i => {
      i.x--;
      this.sel_item$.next(i);
    }));
  }

  public getPlayer (x: number, y: number): boolean {
    let result = false;
    this.all_items[0].forEach(i => {
        if (x === i.x && y === i.y) {
          result = true;
        }
      });
      console.log(result);
    return result;
  }
}
