import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessinfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messinf',
  templateUrl: 'messinf.html',
})
export class MessinfPage {
  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //获取传递过来的参数
    this.title=this.navParams.get('title');

    //当参数没有定义的情况
    if(this.title == undefined){
      this.title = "没有获取到结果";
    }
  }
  pushHomePage(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessinfPage');
  }
  
}
