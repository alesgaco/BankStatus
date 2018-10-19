import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions  } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import QRCode from 'qrcode';
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
  qrData = null;
  createdCode = null;
  scannedCode = null;

  code = 'Monto del credito';
  generated = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  createCode() {
    this.createdCode = this.qrData;
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }


  displayQrCode() {
    return this.generated !== '';
  }


  process() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
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
