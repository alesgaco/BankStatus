import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OauthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OauthProvider {
  apiUrl = "https://sbapi.bancolombia.com/hackathon/v1/security/oauth-otp/oauth2/token";//"https://sbapi.bancolombia.com/hackathon/v1/security/oauth-otp/oauth2/authorize?client_id=52b793cf-a2fb-4c52-801d-8dbcf7512d6b&scope=Customer-detail:read:user&response_type=code&redirect_uri=https://localhost"
  constructor(public http: HttpClient) {
    console.log('Hello OauthProvider Provider');
  }
  login(loginData) {
    loginData["client_id"]  =            "password";
    loginData["client_id"] = "d0b48415-ad62-4791-8e7e-2808fdca8103";
    loginData["client_secret"] = "dE1vD2pY3lO6xN2dX4iL0qU5jQ0iA0uF3aI8qY5iD2eG0kV6oT";
    return new Promise(resolve => {
      this.http.post(this.apiUrl,loginData ).subscribe(response  => {
        console.log("here");
        console.log(response );
      }, err => {
      });
    });
  }

}
