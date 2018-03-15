import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(): void {
    console.log(this.user);
    let url = '/signUp';
    this.httpClient.get(url)
      .subscribe(
        res => {
          // 请求成功，接受响应
          console.log(res);
        },
        err => {
          // 请求失败
          console.error(err);
        }
      );
  }
}
