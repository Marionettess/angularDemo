import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
//import { GetdataService } from '../../services/getdata.service';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(private_route: Router) { 

  }
  //@Input() list:Array<any>;
  ngOnInit() {
   
  }
  list:number[]=[1,2,3,4,5,6];
  goDetail(idx){
    this.Router.navigate(['/gooddetail',idx])
  }
}
