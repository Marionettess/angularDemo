import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
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
import { MyPage } from '../pages/my/my';
import { SetPage } from '../pages/set/set';
import { XixqPage } from '../pages/xixq/xixq';
import { FwxqPage } from '../pages/fwxq/fwxq';
import { SexxPage } from '../pages/sexx/sexx';
import { SefwPage } from '../pages/sefw/sefw';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RetpassPage,
    GvrpPage,
    FabuPage,
    FabuxxPage,
    MessagePage,
    MessinfPage,
    MePage,
    MyPage,
    SetPage,
    XixqPage,
    FwxqPage,
    SexxPage,
    SefwPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:'',
      pageTransition:'ios-transition',
      backButtonIcon:"back",
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RetpassPage,
    GvrpPage,
    FabuPage,
    FabuxxPage,
    MessagePage,
    MessinfPage,
    MePage,
    MyPage,
    SetPage,
    XixqPage,
    FwxqPage,
    SexxPage,
    SefwPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
