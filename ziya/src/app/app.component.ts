import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { RetpassPage } from '../pages/retpass/retpass';
import { GvrpPage } from '../pages/gvrp/gvrp';
import { FabuPage } from '../pages/fabu/fabu';
import { FabuxxPage } from '../pages/fabuxx/fabuxx';
import { MessagePage } from '../pages/message/message';
import { MessinfPage } from '../pages/messinf/messinf';
import { MePage } from '../pages/me/me';
import { SetPage } from '../pages/set/set';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
