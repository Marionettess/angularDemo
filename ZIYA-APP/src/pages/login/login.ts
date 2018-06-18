import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { RetpassPage } from '../retpass/retpass';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  pushTabsPage(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }
  pushRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }
  pushRetpassPage(){
    this.navCtrl.push(RetpassPage);
  }
}
