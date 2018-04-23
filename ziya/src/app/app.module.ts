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
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
