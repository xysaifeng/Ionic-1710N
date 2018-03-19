import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // 类比于数据库查询第一页数据
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  doInfinite(infiniteScroll): void {
    console.log('开始');
    // setTimeout 模拟请求的时间
    setTimeout(() => {
      // 类比于数据库查询下一页数据
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }
      console.log('结束');
      // 事件对象调用 complete 函数
      // 告诉组件新数据加载完成
      infiniteScroll.complete();
    }, 3000);
  }

}
