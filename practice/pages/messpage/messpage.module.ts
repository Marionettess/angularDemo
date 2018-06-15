import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesspagePage } from './messpage';

@NgModule({
  declarations: [
    MesspagePage,
  ],
  imports: [
    IonicPageModule.forChild(MesspagePage),
  ],
})
export class MesspagePageModule {}
