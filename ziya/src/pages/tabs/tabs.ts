import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { MePage } from '../me/me';
import { FabuPage } from '../fabu/fabu';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FabuPage;
  tab4Root = MessagePage;
  tab5Root = MePage;
  /* tab6Root = LoginPage;
  tab7Root = RegisterPage; */

  constructor() {

  }
}
