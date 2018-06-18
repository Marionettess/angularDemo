import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FwxqPage } from '../fwxq/fwxq';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the SefwPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sefw',
  templateUrl: 'sefw.html',
})
export class SefwPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SefwPage');
  }
  pushFwxqPage(){
    console.log("代码方式跳转");
    //跳转到指定页面
    this.navCtrl.push(FwxqPage);
  }
}
