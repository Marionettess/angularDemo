import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  //getdata = new GetdataService();
  //public list;
  constructor ( public getdata:GetdataService) {

  }

  @Input() arrData:Array<any>;
  @Output() getIndex = new EventEmitter();

  ngOnChanges(){
    console.log(0);
  }
  num:number;
  ngOnInit() {
    //this.getdata.addData(300);
    //this.getdata.addData(200);
    console.log(this.getdata.list);
  }

  ngDoCheck(){
    console.log(2);
  }

  fn(i){
    this.getIndex.emit(i);
  }
}
 