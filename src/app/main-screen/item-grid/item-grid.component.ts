import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { ItemsService } from '../../services/items.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss']
})
export class ItemGridComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<boolean>();
  public sel: boolean;

  @Input() X: number;
  @Input() Y: number;

  @Output()
    selectItem: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public itemsService: ItemsService) {
    this.itemsService.sel_item$.takeUntil(this.destroy$)
      .subscribe(input => {
        if (input.x === this.X && input.y === this.Y) {
          this.sel = true;
      }
    });
    this.itemsService.clear_item$.takeUntil(this.destroy$)
      .subscribe(input => {
          this.sel = false;
    });
  }

  ngOnInit() {
  }

  public selItem() {
    if (!this.sel) {
      this.selectItem.emit(this.sel);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
