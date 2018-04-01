import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ItemGridComponent } from './main-screen/item-grid/item-grid.component';
import { CtrlGridMenuComponent } from './ctrl-grid-menu/ctrl-grid-menu.component';
import { ItemsService } from './services/items.service';



@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ItemGridComponent,
    CtrlGridMenuComponent
],
  imports: [
    BrowserModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
