import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
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
              private httpClient: HttpClient,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
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
          if (status === 'exist') {
            this.alertCtrl.create({
              title: '错误',
              subTitle: '邮箱已经存在。',
              buttons: [
                '确认'
              ]
            }).present();
          }
          if (status === 'ok') {
            this.navCtrl.push('HomePage');
          }
          if (status === 'err'){
            this.toastCtrl.create({
              message: '服务器错误',
              duration: 1500
            }).present();
          }
        },
        err => {
          // 请求失败
          console.error(err);
        }
      );
  }
}
