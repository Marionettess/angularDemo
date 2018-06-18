import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { XixqPage } from './xixq';

@NgModule({
  declarations: [
    XixqPage,
  ],
  imports: [
    IonicPageModule.forChild(XixqPage),
  ],
  exports: [
    XixqPage,
  ]
})
export class XixqPageModule {}
