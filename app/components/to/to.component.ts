import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {GetdataService} from '../services/getdata.service';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.css']
})
export class AComponent implements OnInit {

  constructor() { }
  @Input() todata=[];
  @Output() tolist = new EventEmitter<string>();


  ngOnInit(){
    this.dataArr=this.todata;
  }

   data='';
   dataArr=[];
    keyData(e){
    if(e.keyCode==13){
      this.todata.push(this.data);
      this.data = '';  
    }
  }
  dell(i){
    this.todata.splice(i,1)
  }
  fn(dex){
    this.tolist.emit(this.todata[dex]);
    this.todata.splice(dex,1);
  }
  
}
