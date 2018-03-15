import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

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

    // GET 请求的参数设置方法
    // let params = new HttpParams()
    //   .set('email', this.user.email)
    //   .set('password', this.user.password);

    this.httpClient.post(url, {email: this.user.email, password: this.user.password})
      .subscribe(
        res => {
          // 请求成功，接受响应
          let status = res['status'];
          console.log(status);
          if (status === 'ok') {
            this.navCtrl.push('HomePage');
          } else {
          }
        },
        err => {
          // 请求失败
          console.error(err);
        }
      );
  }
}
