import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { XixqPage } from '../xixq/xixq';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the SexxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sexx',
  templateUrl: 'sexx.html',
})
export class SexxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SexxPage');
  }
  pushXixqPage(){
    console.log("代码方式跳转");
    //跳转到指定页面
    this.navCtrl.push(XixqPage);
  }
}
