import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FabuxxPage } from '../fabuxx/fabuxx';

/**
 * Generated class for the FabuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fabu',
  templateUrl: 'fabu.html',
})
export class FabuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FabuPage');
  }
  pushMorePage(){
    console.log("代码方式跳转");
    //跳转到指定页面
    this.navCtrl.push(FabuxxPage);
  }
}
