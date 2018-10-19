import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrreaderPage } from './qrreader';

@NgModule({
  declarations: [
    QrreaderPage,
  ],
  imports: [
    IonicPageModule.forChild(QrreaderPage),
  ],
})
export class QrreaderPageModule {}
