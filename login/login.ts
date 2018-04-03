import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Jsonp, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HomePage } from '../home/home';
import 'rxjs/Rx';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public jsonp:Jsonp, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  user;
  pwd;

  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );

  Login(){
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({userID:this.user,password:this.pwd}),{headers:this.headers}).subscribe(data=>{
      if(data.json()==0){
        this.presentAlert0();
      }
      if(data.json()==0){
        this.presentAlert2();
      }
      else{
        this.navCtrl.push(HomePage);
      }
    });
  }
  presentAlert0(){
    let alert = this.alertCtrl.create({
      title: '用户名错误',
      subTitle: '您的用户名有误',
      buttons: ['返回']
    });
    alert.present();
  }

  presentAlert2() {
    let alert = this.alertCtrl.create({
      title: '密码错误',
      subTitle: '您的密码有误',
      buttons: ['返回']
    });   
  }

}
