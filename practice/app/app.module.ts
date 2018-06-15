import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { RouterModule } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { TextComponent } from './components/text/text.component';
import { GetdataService } from './services/getdata.service';
import { ToComponent } from './components/to/to.component';
import { DoComponent } from './components/do/do.component';
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { GooddetailComponent } from './components/gooddetail/gooddetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    TextComponent,
    ToComponent,
    DoComponent,
    HomeComponent,
    NopageComponent,
    GooddetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'todolist/:id/:num', component: TodolistComponent},
      { path: 'goodlist', component: GoodslistComponent},
      { path: 'text', component: TextComponent},
      { path: 'home', component: HomeComponent},
      { path: 'gooddetail/:id', component: GooddetailComponent},
      { path: '', redirectTo:'home', pathMatch:'full'},
      { path: '**', component:NopageComponent},
    ]) 
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
