import { Component } from '@angular/core';
import { GetdataService } from './services/getdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public get:GetdataService){

  }
  index:number;
  /* ngOnInit(){
    this.index = this.get.index;
    console.log(this.get,index)
  } */

  // 插值表达式
  title = 'hello world';
  imgUrl = 'assets/imgs/m1.png';
  // 绑定属性
  id = 'box';
  // 循环
  arr = [1,2,3,4];

  str:string;

  fn(){
    console.log(123);
  }
 

  // ngSwitch
  fruit:any;
  changeFruit(v){
    console.log(v);
    this.fruit = v;
  }

  // 双向数据绑定
  txt = '新年快乐';

  // todolist
  tolist = [];
  comlist = [];
  content = '';
  addData(){
    this.tolist.push(this.content);
    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      this.tolist.push(this.content);
      this.content = '';
    }
  }
  delData(i){
  	this.tolist.splice(i,1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }
  delData2(i){
  	this.comlist.splice(i,1);
  }
  change2(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
  }
  // 组件交互
  arr1 = [1,2,3,4];
  goodslist = ['a','b','c','d','e','f'];

  agreed = 0;
  disagreed = 0;
  voters = ['张三', '李四', '王五'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  //练习
  data:string;
  dataArr1=[];
  dataArr2=[];
  add(){
    if(this.data!==""){
      this.dataArr1.push(this.data);
      this.data='';
    }
  }
  del1(i){
    this.dataArr1.splice(i,1);
  }
  change1(i){
    this.dataArr2.push(this.dataArr1[i]);
    this.dataArr1.splice(i,1);
  }
  del2(i){
    this.dataArr2.splice(i,1);
  }
  change3(i){
    this.dataArr1.push(this.dataArr2[i]);
    this.dataArr2.splice(i,1);
  }

  con;
  arrData=[1,2,3,4,5];
  
  getI(e){
    this.con = e;
  }

}

