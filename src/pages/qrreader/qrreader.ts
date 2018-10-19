import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QrreaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrreader',
  templateUrl: 'qrreader.html',
})
export class QrreaderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToInicio(){
    this.navCtrl.setRoot('HomePage');
  }
goToCredit(){
  this.navCtrl.setRoot('CreditPage');
}
goToProfile(){
  this.navCtrl.setRoot('ProfilePage');
}
goToReadQR(){
  this.navCtrl.setRoot('QrreaderPage');
}
goToLogin(){
  this.navCtrl.push('LoginPage');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad QrreaderPage');
  }

}
