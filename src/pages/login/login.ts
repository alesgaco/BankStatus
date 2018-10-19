import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
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
  err: any
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    private storage: Storage) {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

loginUser(){
//#

  
  let formDataJson = {
    'grant_type': 'password',
    'username': this.login.value.email,
    'password': this.login.value.password,
    'scope': 'Customer-detail:read:user'
  };
  console.log('grant_type=password&username='+ this.login.value.email+ '&password='+ this.login.value.password + '&scope=Customer-detail:read:user');
  let dataApi = 'grant_type=password&scope=Customer-detail:read:user&username='+ this.login.value.email+ '&password='+ this.login.value.password
  this.http.post("https://sbapi.bancolombia.com/hackathon/v1/security/oauth-otp/oauth2/token"
    ,dataApi  
    , 
    {
      headers: new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa("52b793cf-a2fb-4c52-801d-8dbcf7512d6b:Q8uA6oB2hD3yM7mW8yY6jG2sM5iW3lX7eI0aE1gB5fP1qU3oQ8")}
      )
      }).subscribe(response  => {
        this.storage.set('auth', response);
        this.navCtrl.setRoot('HomePage');
        console.log(response );
  }, err => {
    this.err = "Error usuario o contraseña invalidos"
    console.log(err )
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
