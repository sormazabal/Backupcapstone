import { Component, OnInit } from '@angular/core';
import { deliveries } from '../deliveries';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  deliveries = deliveries;
  constructor() { }

  ngOnInit() {
  }
  reset(){
    deliveries.forEach(delivery => delivery.status='');
  }

}
