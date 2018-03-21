import { Injectable } from '@angular/core';

@Injectable()
export class GetdataService {

  constructor() { }
  

  list=[1,2,3,4];
  get(url:number){
    console.log(url+100);
  }

  addData(num:number){
    this.list.push(num);
  }
  
}
