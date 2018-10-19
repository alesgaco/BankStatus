import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToInicio(){
    this.navCtrl.push('HomePage');
  }
goToCredit(){
  this.navCtrl.push('CreditPage');
}
goToProfile(){
  this.navCtrl.push('ProfilePage');
}
goToReadQR(){
  this.navCtrl.push('QrreaderPage');
}
goToLogin(){
  this.navCtrl.pop();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
