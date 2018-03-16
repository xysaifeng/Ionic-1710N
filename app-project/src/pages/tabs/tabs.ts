import {Component} from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = 'HomePage';
  findPage = 'FindPage';
  catPage = 'CatPage';
  cartPage = 'CartPage';
  userPage = 'UserPage';

  constructor() {
  }
}
