import {Component} from '@angular/core';
import {IonicPage, NavController, AlertController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    email: 'tom@tom.com',
    password: '123'
  };

  constructor(public navCtrl: NavController,
              private httpClient: HttpClient,
              private alertCtrl: AlertController) {
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
          if (status === 'ok') {
            this.navCtrl.push('IndexPage');
          }
          if (status === 'err') {
            this.alertCtrl.create({
              title: '错误',
              subTitle: '无效的用户名或密码',
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
