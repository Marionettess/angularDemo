import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { List } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  items=[];

  constructor(public navCtrl: NavController,) {

  }

  search='zxx';

  doInfinite(infiniteScroll) {
    console.log('Begin async operation')
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length);
        
      }
  
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

}
