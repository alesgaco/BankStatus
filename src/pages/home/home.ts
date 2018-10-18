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

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Si", "No"],
        datasets: [{
          data: [90 , 10],
          backgroundColor: [
            'rgba(124,252,0, 1)',
            'rgba(255, 255, 255, 0)',
          
          ],
          hoverBackgroundColor: [
            "#7CFC00",
            "#FFFFFF",
          ]
        }]
      },
      options: {
        circumference: Math.PI,
        rotation: - Math.PI 
      }

    });
    //console.log('ionViewDidLoad HomePage');
  }

}
