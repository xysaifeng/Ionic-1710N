import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  basicToast(): void {
    let toast = this.toastCtrl.create({
      message: '基本消息提示',
      duration: 2000
    });
    toast.present();
  }

  toastPosition(position: string): void {
    this.toastCtrl.create({
      message: '消息显示的位置',
      duration: 2000,
      position: position
    }).present();
  }

  toastClose(): void {
    this.toastCtrl.create({
      message: '可关闭消息提示',
      // duration
      showCloseButton: true,
      closeButtonText: 'Close'
    }).present();
  }
}
