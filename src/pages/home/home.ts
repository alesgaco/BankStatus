import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;

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
  //this.navCtrl.push('LoginPage');
}

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'pie',
      data: {
        labels: ["no viable", "poco viable","viable","muy viable"],
        datasets: [{
          data: [25 , 25 ,25,25],
          backgroundColor: [
            'rgba(255, 51, 1)',
            'rgba(255, 153, 0, 1)',
            'rgba(255, 255, 0, 1)',
            'rgba(124,252,0, 1)',
          ],
          hoverBackgroundColor: [
            "#FF3300",
            "#ff9900", 
            "#FFFF00",
            "#7CFC00",
          ]
        },
        {
          data: [90,8,10],
          backgroundColor: [
            'rgba(255, 255,255, 1)',
            'rgba(0, 0, 0 , 1)',
            'rgba(255, 255,255, 1)',
          ]
        },
      ]
      },
      options: {
        circumference: Math.PI,
        rotation: - Math.PI 
      }

    });
    //console.log('ionViewDidLoad HomePage');
  }

}
