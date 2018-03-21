import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gooddetail',
  templateUrl: './gooddetail.component.html',
  styleUrls: ['./gooddetail.component.css']
})
export class GooddetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id)
  }

}
