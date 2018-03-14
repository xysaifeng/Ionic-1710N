import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  // public protected private
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  basicAlert(): void {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Invalid Email or password.',
      buttons: [
        'OK'
      ]
    });
    alert.present();
  }

  confirmAlert(): void {
    this.alertCtrl.create({
      title: 'Confirm',
      subTitle: 'Delete this record?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('ok');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    }).present();
  }
}
