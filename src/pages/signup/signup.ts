import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  registrarte: FormGroup
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder,) {
      this.registrarte = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  
  }

  signup(){
    this.navCtrl.setRoot('HomePage');
  }

 return(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
