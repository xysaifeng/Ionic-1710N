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
    // SQLite

    // 从 storage 中提取信息 user
    // user 存在，显示 UserPage
    // user 不存在 this.userPage = 'SignInPage';
  }
}
