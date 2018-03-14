import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ButtonPage} from '../button/button';
import {ListPage} from '../list/list';
import {CardPage} from '../card/card';
import {GesturePage} from '../gesture/gesture';
import {APage} from '../a/a';
import {FabPage} from '../fab/fab';
import {GridPage} from '../grid/grid';
import {FormPage} from '../form/form';
import {ToastPage} from "../toast/toast";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buttonPage;
  listPage;
  cardPage;
  gesturePage;
  aPage;
  fabPage;
  gridPage;
  formPage;
  toastPage;

  constructor(public navCtrl: NavController) {
    this.buttonPage = ButtonPage;
    this.listPage = ListPage;
    this.cardPage = CardPage;
    this.gesturePage = GesturePage;
    this.aPage = APage;
    this.fabPage = FabPage;
    this.gridPage = GridPage;
    this.formPage = FormPage;
    this.toastPage = ToastPage;
  }

}
