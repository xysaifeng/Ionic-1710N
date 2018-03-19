import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  user = {
    email: 'tom@tom.com',
    password: '123'
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpClient: HttpClient,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  toSignUpPage(): void {
    this.navCtrl.push('SignUpPage');
  }

  signIn(): void {
    let url = '/signIn';
    this.httpClient.post(url, {user: this.user})
      .subscribe(
        res => {
          let status = res['status'];
          if(status === 'ok'){
            // 登录成功
          }
          if(status === 'err'){
            // 登录失败
            this.alertCtrl.create({
              title: '还差一点儿',
              subTitle:'邮箱或密码不对',
              buttons: [
                '确认'
              ]
            }).present();
          }
        },
        err => {
          console.error(err);
        }
      );
  }
}
