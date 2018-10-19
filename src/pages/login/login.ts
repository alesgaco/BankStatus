import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OauthProvider } from '../../providers/oauth/oauth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  token : any
  login: FormGroup
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public Oauth: OauthProvider,
    public formBuilder: FormBuilder,) {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

loginUser(user){
  var form = [];
  form["username"] = "CC-" + this.login.value.email;
  form["password"] =this.login.value.password ;
  this.navCtrl.setRoot('HomePage');
  this.Oauth.login(form).then(data => {
    this.token = data;
    console.log(this.token);
  });
}

goToSignup(){
  this.navCtrl.push('SignupPage');
}


goToResetPassword(){
  this.navCtrl.push('ResetPasswordPage');
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
