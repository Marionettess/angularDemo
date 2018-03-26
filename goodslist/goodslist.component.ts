import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { Http,Headers,Jsonp } from "@angular/http"; 
import { Observable } from "rxjs";
import "rxjs/Rx";
import { GetdataService } from '../../services/getdata.service';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router: Router , public http:Http,public jsonp:Jsonp,) { 

  }
  //@Input() list:Array<any>;
  list:number[] = [1,2,3,4,5,6];
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  ngOnInit() {
    /* this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe(data=>{
      console.log(JSON.parse(data['_body']));
      //this.list = JSON.parse(data['_body']);
    },err=>{
      console.log(err);
    }); */
  

    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
        console.log(data['_body']);
        this.list = data['_body'];
    },err=>{
        console.log(err);
    });

    /* this.http.post('http://datainfo.duapp.com/shopdata/getclass.php',JSON.stringify({}),{headers:this.headers}).filter(data=>{
      return data.status === 200;
    }).map(data=>data.json()).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    }) */
  }
  goDetail(idx){
    this.router.navigate(['/gooddetail',idx])
  }
}
