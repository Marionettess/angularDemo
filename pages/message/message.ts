import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessinfPage } from '../messinf/messinf';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  messinfpage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messinfpage = MessinfPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  pushMorePage(){
    console.log("代码方式跳转");
    //跳转到指定页面
    this.navCtrl.push(MessinfPage);
  }
}
